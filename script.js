const form = document.getElementById('my-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  submit();
});

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = document.getElementById('status').checked;
  
    return {
      name: name,
      city: city,
      email: email,
      zipCode: zipCode,
      status: status
    };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  const status = document.getElementById('status');

  return status.checked;
}

function validateFormData(formData) {
  if (formData == null) {
    return false;
  }
  if (!isNumber(formData.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}

function submit() {
  const formData = handleGetFormData();
  const isValid = validateFormData(formData);

  if (!isValid) {
    const warning = document.getElementById('warning');
    alert('Harap Mengisi Bagian Yang Kosong dan Centang Kotak Persetujuan!')
  } else {
    const warning = document.getElementById('warning');
    warning.innerHTML = '';
  }
}
  