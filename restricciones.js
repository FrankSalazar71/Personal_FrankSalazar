document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
      if (!validarFormulario()) {
        event.preventDefault(); // Prevents form submission if validation fails
      }
    });

    function validarFormulario() {
      var nombre = document.getElementById("nombre").value;
      if (!/^[A-Za-z ]+$/.test(nombre)) {
        alert("Nombre solo puede contener letras y espacios");
        return false;
      }

      var apellidos = document.getElementById("apellidos").value;
      if (!/^[A-Za-z ]+$/.test(apellidos)) {
        alert("Apellidos solo puede contener letras y espacios");
        return false;
      }

      var dni = document.getElementById("dni").value;
      if (!/^[0-9]{9}$/.test(dni)) {
        alert("DNI debe contener 9 dígitos numéricos");
        return false;
      }

      var correo = document.getElementById("correo_electronico").value;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        alert("Ingrese un correo electrónico válido");
        return false;
      }

      var acepto = document.getElementById("acepto").checked;
      if (!acepto) {
        alert("Debe aceptar los términos y condiciones");
        return false;
      }

      return true;
    }
  });