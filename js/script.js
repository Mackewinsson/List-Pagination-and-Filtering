/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-list li');
const studentPerPage = 9;

const showPage = (list, page) => {

   let startIndex = (page * studentPerPage) - studentPerPage;
   let endIndex = page * studentPerPage;

   for(let i = 0; i < list.length; i += 1){

      if(i >= startIndex && i <= endIndex){
         list[i].style.display = 'block';
      } else{
         list[i].style.display = 'none';
      }
   };
};

const appendPageLinks = (list) => {

   const pagesNeeded = Math.ceil(list.length / 10);
   const page = document.querySelector('.page');

   let div = document.createElement('div');
   div.className = 'pagination';
   let ul = document.createElement('ul');

   page.appendChild(div);
   div.appendChild(ul);

   // for (let i = 0; i < pagesNeeded; i += 1) {

   //    let li = docuement.createElement('li');
   //    let a = docuement.createElement('a');

   // };
};

appendPageLinks(studentList);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.