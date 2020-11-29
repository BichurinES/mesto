// Функционал кнопки редактирования профиля

const editButton = document.querySelector('.profile__edit-button');

function editProfile() {
  let popup = document.querySelector('.popup'),
      name = document.querySelector('.profile__title'),
      description = document.querySelector('.profile__subtitle'),
      nameField = popup.querySelector('.popup__form-field_type_name'),
      aboutField = popup.querySelector('.popup__form-field_type_about');

  nameField.value = name.textContent;
  aboutField.value = description.textContent;
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', editProfile);

// Функционал кнопки закрытия формы по кнопке или по щелчку вне зоны формы

function closeForm() {
  let popup = document.querySelector('.popup');
  popup.classList.remove('popup_opened');
}

function closeFormFromClick(event) {
  let closeButton = document.querySelector('.popup__close-button'),
      popup = document.querySelector('.popup');

  if (event.target !== popup && event.target !== closeButton) {
    return;
  }

  closeForm();
}

document.addEventListener('click', closeFormFromClick);

// Функционал кнопки сохранения формы

const form = document.querySelector('.popup__form');

function changeInfo(event) {
  event.preventDefault();

  let name = document.querySelector('.profile__title'),
      description = document.querySelector('.profile__subtitle'),
      nameField = document.querySelector('.popup__form-field_type_name'),
      aboutField = document.querySelector('.popup__form-field_type_about');

  name.textContent = nameField.value;
  description.textContent = aboutField.value;

  closeForm();
}

form.addEventListener('submit', changeInfo);
