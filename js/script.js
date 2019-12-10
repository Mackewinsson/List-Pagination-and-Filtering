/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-list li');
const studentPerPage = 10;

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

showPage(studentList, 1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.