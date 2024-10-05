<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { onMounted, ref, watch } from 'vue';
import * as yup from 'yup';

interface Contact {
  id: number
  name: string
  phone: string
  address?: string  // Optional address field
}

// CRUD form data
const contacts = ref<Contact[]>([])

// Load contacts from localStorage on component mount
onMounted(() => {
  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts) {
    contacts.value = JSON.parse(savedContacts)
  }
})

// Watch for changes in contacts and save to localStorage
watch(contacts, (newContacts) => {
  localStorage.setItem('contacts', JSON.stringify(newContacts))
}, { deep: true })

const schema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  address: yup.string()
});

const { handleSubmit, resetForm, setErrors } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    phone: '',
    address: ''
  }
});

const { value: name, errorMessage: nameError } = useField<string>('name');
const { value: phone, errorMessage: phoneError } = useField<string>('phone');
const { value: address } = useField<string>('address');

const editingId = ref<number | null>(null);

const onSubmit = handleSubmit((values) => {
  if (editingId.value !== null) {
    if (checkUniquePhone(values.phone!, editingId.value)) {
      updateContact(values);
    } else {
      setErrors({ phone: 'Phone number already exists' });
    }
  } else {
    if (checkUniquePhone(values.phone!)) {
      addContact(values);
    } else {
      setErrors({ phone: 'Phone number already exists' });
    }
  }
  editingId.value = null;
});

const checkUniquePhone = (phone: string, editingId?: number) => {
  if (editingId !== null) {
    return !contacts.value.some(contact => contact.phone === phone && contact.id !== editingId);
  }
  return !contacts.value.some(contact => contact.phone === phone);
}

const addContact = (values: Partial<Contact>) => {
  contacts.value.push({
    id: Date.now(),
    name: values.name!,
    phone: values.phone!.trim(),
    address: values.address
  });
  resetForm();
};

const updateContact = (values: Partial<Contact>) => {
  const index = contacts.value.findIndex(c => c.id === editingId.value);
  if (index !== -1) {
    contacts.value[index] = {
      ...contacts.value[index],
      ...values,
      phone: values.phone!.trim()
    };
  }
  resetForm();
};

const editContact = (contact: Contact) => {
  name.value = contact.name;
  phone.value = contact.phone;
  address.value = contact.address || '';
  editingId.value = contact.id;
};

const deleteContact = (id: number) => {
  contacts.value = contacts.value.filter(c => c.id !== id);
};


</script>

<template>
  <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
    <h2>Contact CRUD Form</h2>
    <form @submit="onSubmit" class="mb-4">
      <div class="mb-2">
        <label for="name" class="block">Name:</label>
        <input id="name" v-model="name" type="text" class="w-full px-2 py-1 border rounded">
        <p v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</p>
      </div>
      <div class="mb-2">
        <label for="phone" class="block">Phone:</label>
        <input id="phone" v-model="phone" type="tel" class="w-full px-2 py-1 border rounded">
        <p v-if="phoneError" class="text-red-500 text-sm mt-1">{{ phoneError }}</p>
      </div>
      <div class="mb-2">
        <label for="address" class="block">Address:</label>
        <input id="address" v-model="address" type="text" class="w-full px-2 py-1 border rounded">
      </div>
      <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        {{ editingId !== null ? 'Update Contact' : 'Add Contact' }}
      </button>
    </form>

    <h3>Contacts List</h3>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="mb-2">
        {{ contact.name }} - {{ contact.phone }}
        <button @click="editContact(contact)" class="px-2 py-1 ml-2 text-white bg-green-500 rounded hover:bg-green-600">Edit</button>
        <button @click="deleteContact(contact.id)" class="px-2 py-1 ml-2 text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
      </li>
    </ul>
  </div>
</template>
