// template_pkb8gqj
// service_ynh8isc
// WCQQdp3yTURXNPzp4

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      'service_ynh8isc',
      'template_pkb8gqj',
      event.target,
      'WCQQdp3yTURXNPzp4'
    ).then(() =>{      
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
       "The email service is temporarily unavailable due to high volume responses. Please contact me directly at kenneth.gaudioso@gmail.com" 
      )
    })  
}

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  // toggle modal
  document.body.classList += " modal--open";
}