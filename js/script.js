/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-list li');
const studentPerPage = 10;

const showPage = (list, page) => {

   const startIndex = (page * studentPerPage) - studentPerPage;
   const endIndex = page * studentPerPage;

   for(let i = 0; i < list.length; i += 1){

      if(i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   };
};

const appendPageLinks = (list) => {

   const pagesNeeded = Math.ceil(list.length / 10);

// Selecting .page to append div.pagination and ul

   const page = document.querySelector('.page');

// Creating Div and ul elements and appeding them to .page

   const div = document.createElement('div');
   div.className = 'pagination';
   const ul = document.createElement('ul');
   page.appendChild(div);
   div.appendChild(ul);

   for (let i = 0; i < pagesNeeded; i += 1) {
// selecting the ul
      const ul = div.getElementsByTagName('ul')[0];
// Creating the li and a elements
      const li = document.createElement('li');
      const a = document.createElement('a');
// Appending the li to the ul
      li.appendChild(a);
      ul.appendChild(li);
// adding the atributes to a elements
      a.href = '#'
      a.textContent = i + 1;
// adding active class to the first link only
      if( a.textContent == 1){

         a.className = 'active';

      };
// for loop to addevent listener to all a elements
   };
// Add event listener on a tags
   ul.addEventListener('click', (event) => {

      const buttons = ul.getElementsByTagName('a');
// Loops through the a tags and take the class out
      for (let i = 0; i < pagesNeeded; i += 1) {
         buttons[i].className = '';
      };
// add the active class to the event.target
      event.target.className = 'active';
// call the showPage function to display the right elements
      showPage(studentList, event.target.textContent);
   });
};


const searchBar = (list) => {
// Select the .page-header element
const pageHeader = document.querySelector('div.page-header');
// Create the div element and add the student-search class
const divStudentSearch = document.createElement('div');
divStudentSearch.className = 'student-search';
// Create input and adding placeholder
const input = document.createElement('input');
input.placeholder = 'Search for students...';
// Create button and adding textContent Search
const button = document.createElement('button');
button.textContent = 'Search';
// Appending the elements to the dom
divStudentSearch.appendChild(button);
divStudentSearch.appendChild(input);
pageHeader.appendChild(divStudentSearch);

// Add event listener

button.addEventListener('click', () =>{

      const h3 = document.getElementsByTagName('h3');

      for(let i = 0; i < h3.length; i += 1) {
            let title = h3[i].textContent;      
            if(title.toLowerCase().indexOf(input.value) != -1){

                  list[i].style.display = 'block';

            }else{
                  
                  list[i].style.display = 'none';
            };
      }
});


input.addEventListener('keyup', () =>{

      const h3 = document.getElementsByTagName('h3');

      for(let i = 0; i < h3.length; i += 1) {
            let title = h3[i].textContent;      
            if(title.toLowerCase().indexOf(input.value) != -1){

                  list[i].style.display = 'block';

            }else{
                  
                  list[i].style.display = 'none';
            };
      }
});


};

// calls appendPageLinks()

searchBar(studentList);

// calls appendPageLinks() to dinamicaly add pagination buttons
appendPageLinks(studentList);
// calls the showPage() to show the right elements on the pagination
showPage(studentList, 1);
