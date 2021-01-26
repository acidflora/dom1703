
var formElement = document.getElementById('fdForm')
var feedbackListElement = document.getElementById('fdList')
var fdTemplate = `<li class="feedback-item">
<div>
  <p class="feedback-text"></p>
  <p class="feedback-author"></p>
  <p class="feedback-partner"></p>
  <button class="feedback-item-delete">Удалить</button>
</div>
</li>
<li class="feedback-item">`

const createElement = (template) => {
  const containerElement = document.createElement(`div`);
  containerElement.innerHTML = template;
  return containerElement.firstChild;
};

const removeElement = (element) => {
  debugger
  if (element) {
    element.remove();
    element=null;
  }
};

function openForm() {
    document.getElementById('myForm').style.display = 'block';
  }
  
function closeForm() {
    document.getElementById('myForm').style.display = 'none';
  }

function feedBackHandler (evt) {    
    evt.preventDefault()    
    var firstNameInputValue = document.getElementById('fname').value
    var lastNameInputValue = document.getElementById('lname').value
    var partnerInputValue = document.getElementById('partner').value
    var feedBackInput = document.getElementById('subject').value
    var newFeedback = createElement(fdTemplate);
    newFeedback.getElementsByClassName('feedback-text')[0].innerText = feedBackInput
    newFeedback.getElementsByClassName('feedback-author')[0].innerText = firstNameInputValue + ' ' + lastNameInputValue
    newFeedback.getElementsByClassName('feedback-partner')[0].innerText = 'Специалист: ' + partnerInputValue  
    feedbackListElement.insertAdjacentElement('beforeend', newFeedback)       
    upd();
  }
function upd () {
  var feedbackRemoveButtons = document.querySelectorAll('.feedback-item-delete')
  feedbackRemoveButtons.forEach((button,index) => {  
    button.addEventListener('click', (evt) => {
      removeElement(evt.target.parentElement.parentElement);
    })  
  });
}

upd();
formElement.addEventListener('submit', feedBackHandler)

