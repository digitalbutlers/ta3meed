/*---change-Description---*/


const decrAboutClients = document.querySelector('.about-clients');
const decrAboutSuppliers = document.querySelector('.about-suppliers');
document.addEventListener('DOMContentLoaded', function(){

  const targetEl = document.querySelector('[word-content="clients"]');
  
  function callback(mutations, observer){
      if(targetEl.classList.contains('active')){
        decrAboutSuppliers.style.display = 'none';
        decrAboutClients.style.display = 'block';
      }else{
        decrAboutClients.style.display = 'none';
        decrAboutSuppliers.style.display = 'block';
      }
  }
  const observer = new MutationObserver(callback);
  observer.observe(targetEl, {
      attributes: true
  });
  })

/*---change-Description---*/
/*---interval---*/
const faqQuestion = document.querySelectorAll('.faq-question')
const hiddenBlocks = document.querySelectorAll('.faq-answer-wrapper')
const questionItems = document.querySelectorAll('.faq-item');
const videos = document.querySelectorAll('.benefits-video_inner');
const questions = document.querySelectorAll('.faq-item');
let num=0;

  let interval = setInterval(() => {

  num++
  if(num === questions.length) {
      num = 0
  };

  questions.forEach((elem, index)=>{

    if(index===num){
 
      let parentElem = elem.closest('.faq-item')
      let hiddenBlock = parentElem.querySelector(".faq-answer-wrapper")
      let hiddenBlockHeight = hiddenBlock.scrollHeight 
      hiddenBlocks.forEach((item, ind) => {
      if(index === ind) {
        if(item.classList.contains('active')) {
        item.closest('.faq-item').classList.remove('active')
        item.classList.remove('active')
        item.style.height = 0 + 'px'
        } else {
        item.closest('.faq-item').classList.add('active')
        item.classList.add('active')
        item.style.height = hiddenBlockHeight + 'px'
        
        }
      } else { 
        item.closest('.faq-item').classList.remove('active')
        item.classList.remove('active')
        item.style.height = 0 + 'px'
      }
      }) ;
      
    }else{

}
  });

}, 5000)
/*---interval---*/
/*---faq---*/
faqQuestion.forEach((elem, numb) => {

  elem.addEventListener("click", function(){
	
    clearInterval(interval)
	if(!elem.closest('.faq-item').classList.contains('active')){

		let parentElem = elem.closest('.faq-item')
		let hiddenBlock = parentElem.querySelector(".faq-answer-wrapper")
		let hiddenBlockHeight = hiddenBlock.scrollHeight 
		hiddenBlocks.forEach((item, ind) => {
		if(numb === ind) {
			if(item.classList.contains('active')) {
			item.closest('.faq-item').classList.remove('active')
			item.classList.remove('active')
			item.style.height = 0 + 'px'
			} else {
			item.closest('.faq-item').classList.add('active')
			item.classList.add('active')
			item.style.height = hiddenBlockHeight + 'px'
			}
		} else { 
			item.closest('.faq-item').classList.remove('active')
			item.classList.remove('active')
			item.style.height = 0 + 'px'
		}
		}) ;
	}		
  })
})
/*---faq---*/

function addHeightCurrentActive(){
  questionItems.forEach(elem=>{
      if(elem.classList.contains('active')){
        let wrapperAnswer = elem.querySelector('.faq-answer-wrapper');
        let heightWrapperAnswer = wrapperAnswer.scrollHeight;
        wrapperAnswer.style.height = heightWrapperAnswer + 'px';
      }
  })
}
addHeightCurrentActive()
/*------------radio-----------*/
  const formBlock = document.querySelector('.form-block');
  const radioButtons = formBlock.querySelectorAll('.radio-button');
  const hiddenInput = formBlock.querySelector('[data-name= "hidden-input"]');

  function showInput(){

    radioButtons.forEach(elem=>{
      let input = elem.querySelector('input');
      if(input.checked){
        hiddenInput.classList.add('active');
      }else{
        hiddenInput.classList.remove('active');
      }
    })
  }
  showInput();
  radioButtons.forEach(elem=>{

elem.addEventListener('click', showInput)
  })
  /*------radio--------*/
/*---changePrograms---*/
const financeLists = document.querySelectorAll('.finance-list');
const financeListClients = document.querySelector('.finance-list.clients');
const financeListSuppliers = document.querySelector('.finance-list.suppliers');
const financeChemeClients = document.querySelector('.finance-cheme.clients');
const financeChemeSuppliers = document.querySelector('.finance-cheme.suppliers');
const switsh = document.querySelector('.switch-parent')

function poinerCurrentStep(){
}
function changePrograms() {
  if(!switsh.querySelector('input').checked){

switsh.previousElementSibling.classList.add('active');
    switsh.nextElementSibling.classList.remove('active');
    financeListClients.classList.add('active');
    financeChemeClients.classList.add('active');
    financeListSuppliers.classList.remove('active');
    financeChemeSuppliers.classList.remove('active');
  }else{


switsh.previousElementSibling.classList.remove('active');
    switsh.nextElementSibling.classList.add('active');
    financeListSuppliers.classList.add('active');
    financeChemeSuppliers.classList.add('active');
    financeListClients.classList.remove('active');
    financeChemeClients.classList.remove('active');
  }
}
changePrograms()

financeLists.forEach(elem=>{
  elem.addEventListener('click', poinerCurrentStep)
});
switsh.addEventListener('click', changePrograms);

/*---changePrograms---*/
/*---activeWordSwitch---*/

const wordsSwitch = document.querySelectorAll('[data-name="word-switch"]');

function changeProgram() {

	wordsSwitch.forEach(elem => {
		elem.classList.remove('active')
	});

	if(this.getAttribute('word-content') === 'clients'){
		this.classList.add('active');
		switsh.querySelector('input').checked = false;

	}else if(this.getAttribute('word-content') === 'suppliers'){
		this.classList.add('active');
		switsh.querySelector('input').checked = true;

	}
	
	changePrograms()
};

wordsSwitch.forEach(elem => {
	elem.addEventListener('click', changeProgram);
});

/*---activeWordSwitch---*/