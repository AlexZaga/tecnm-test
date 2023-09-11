<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <div>
        <label for="NombreUsuario">Usuario:</label>
        <input type="text" id="NombreUsuario" v-model="formData.username" />
      </div>
      <div>
        <label for="Password">Contraseña:</label>
        <input type="password" id="Password" v-model="formData.password" />
      </div>
      <button type="submit">Iniciar Sesión</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });
        
        if (response.ok) {
          // Aquí puedes redirigir al usuario o manejar la respuesta del backend de otra manera.
          alert('Inicio de sesión exitoso');
        } else {
          // Aquí puedes manejar un inicio de sesión fallido, por ejemplo, mostrando un mensaje de error.
          alert('Inicio de sesión fallido');
        }
        
        

      } catch (error) {
        // Manejar errores de red u otros errores aquí.
        console.error('Error al iniciar sesión:', error);
        alert('Error al iniciar sesión:', error)
      }
    },
  },
};
</script>
