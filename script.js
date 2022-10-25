const tasksWrapper = document.querySelector('.tasksWrapper');
const archiveModalContent = document.querySelector('#archiveModalContent');
console.log(archiveModalContent)
class _Task{
     constructor(task,completed,important,Id){
       this.id = Id;
       this.task= task;
       this.completed = completed;
       this.important = important;
    } 
}

class UI {
   static displayTasks (){
      const tasksList = StoreTask.showTasks();
         tasksList ? tasksList.forEach((e)=>{UI.addTask(e,false)}) : tasksWrapper.innerHTML = "<p>No task </p>";
   }
   static displayTasksArchive(){
      const tasksList = ArchiveTask.showTasks();
      tasksList ? tasksList.forEach((e)=>{UI.addTask(e,true)}) : tasksWrapper.innerHTML = "<p>No task </p>";
   }
   static addTask (e,storeType){
         console.log(storeType)
         const singleTask = document.createElement('div');
         singleTask.setAttribute('class', 'singleTask');
         const htmlUi = `
         <div class="singleTask">
         <span class="${e.completed == true ? 'comptetedTask':''}
                      ${e.important == true ? 'urgent':'regular'}">
                      ${e.task}
         </span>
         <button class="done action  ${storeType == true ? 'notVisible':''}" data-id=${e.id}>
            <img src="data:image/png;base64,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">
         </button>
         <button class="delete action" data-id=${e.id}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVR4nO2azVHDMBCFnxhm0kMItAA3aIGBNoALoRiO1MHQAsmJnGjASQPgC6fHwXHGmMh2ZK9WifTdMtHP08tau3IEJBLOkByRfCI5I5nTTr5uMyU50tY9CCRPSC4aFm3jg+SJtv5erH95l8VXTdjfSGAR9n151F6HMyTntcW8siGsSU5IvtX6vPvUPCgkv2uLmXToc1rr8+VDaxvGpRNJ/hnEmE7juPaT5EhbgDbJAG0B2vwzgB2quy19OtGxn17VSPfqTgrxqnGzC7Nwew7gXHJCBxYArowxPxKDVx+BB4S3eAC4AHAnPgt3rO4EdehUjXSo7gS1eKsaq3tAUFWaLz3R1wHHti/qv8ChEn0EVA1YqqloJ5MauGrAPcI0IUOhTQTrzuo7K2hlobQHaAvQJhmgLUCbZID0BCRvSC7b3nxs6SdFRvK6nEc8DZLMAKidLC1kxpgzwI8BQZ4pyvVEvwdYT4NSaL1nsEVi9BGQDNAWQHJlSVfjSpvxjqlu1XX+XnvAUJlCE/UI0CZ6A3oVQkO18YFNR/QREL0BvbKASziHdjaIPgKSAdoCtPFeCYaSBkuij4BkgLYA7dOgugHaRG+A90owNLy/Fg8lDXY5Dea1AUL7c2MQmgz4rH1+OUQTmh6BKYBnj1q8Uj4CTQaMAMxQ3NU9OFr3gPXt7FsUt7UPjc2ts8Y6wBizAnAJYIoiGvKm9nuC6K2zxL7xC0vOR4rWFYc4AAAAAElFTkSuQmCC">                
         </button>
         <button class="archive action  ${storeType == true ? 'notVisible':''}" data-id=${e.id}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVR4nO2by4sdRRjFf18mid68HCPOyhmMGqLJCIqOShYazSwkiriIoiCIWSiirmQUxIX+DyK6EQVxJCouszITXPqIGpDRBHxMDEHJQxOYyUwex0X1Tdqbe7urq/pOgdMH7qbu1+d8deh6dPdXsMRhPkGSrgGeBG4GVkToCZgBPjWzgx0am4CdwLBvXj1wFvgJmDSz4xE8FxMbl3RS9eKcpImcxqtZW504IWl7Wf8KnZY0AvwIrIl2sjseBQaAz/rEfxrYbGZ/9ApYVkLwPP3rPMArwERpVDjW4vrQE8tLCG6rL5euuJ248e6r0RNlBlxZYyLd0Oozf6lG2RD432PJG1A2BHzwC/AN8HeubRVuz3AH8WNcGf/PwGyufRAYAzZE8hcoS1MF6+wZSc9I6tlBSVslzUSs5TOS7ingN0m7slx6YapfBjzryXGrpIWAzs9L2uKp8dxiG3BEkvf8IWl3gAEfV+AfkHQ0xIDQSfCAmV2oEL8/QON730AzOw/8EKARbMB8n+NDrjkToNEsg9EGSHpH0usdbeOSvpYUvcxKWp5xjXe0vybp3Vj+Ou6Au3HrfR6jwJ3U8yC1JuMa7WgfA+6KJW+GQOoEUqMxIHUCqdEYkDqB1GgMSJ1AajQGpE4gNRoDUieQGo0BqRNIjcaA1AmkRmNA6gRSozEgdQKpUYcBp7NfZ9s8Yd8DOtHmOeWhWxl1fB3eyeUfJT4A9prZXCy5mc1JugU43PHXS8AVsfzRBpjZX13azgG/xnLn+C7jMrN/6uAOHQJV3/evDdBYvQgawQaMSVpVIf6+AA3vayStxn0oqYxQA9YBb/gESnoYeCBAY1zSQ56xbxJ4BxSioD6gjbckDfW4tiXpRUmzAbUBbcxKekFS10ovSUOS3i7hKKwPKKsUnQK2lfh0Hjfh5SelFq52p64yuLlMI7+qDALX4ypNi7DPzO7v9Wcdy+AAcFMNPEVoAZv7QdzsBFMnkBqxQ2AemAS+BRZy7cuAjcBTQNdJsgL+BD4EDuFqBttYiasbeIIadoRdUbIKHJbbohZdPyhpb8Qq8IWkq0o0tmS5BK0CMQbc68mxXtLxgM4fk3S1p8a2UANC54BpM/vSJ9DMTgCfBGjsNrOTnhr7cKW0lRFqwG8V40MejH5fBI1gA4Yrxo8EaFy3CBrBBoyqoIg5D7lJ7LEAjcclrfPU2ErgRilmH/CRpBuKAuSe0iaBawP4h4DJjKNI40bcMhmEmH3ABuCApPeBr/jvPn0FsAnYRfVbOY8dwLSk94CDuDOBbbRwNYpPU/3dwUWUPQztAR4MJffAXJZDP88m7TGzHb3+LBsC39WcTCf2L5JGT5TdAcO4g5P1v2xweAT3NPl5n/hP4Q5OHglmkLQ9cCdXhLOSXs5pTGRtdeKYpNI3Ub6Hp9dz6fD0ymA34QKXDk8f6tDYiHvFPkLc6rQATOMOT3vtJJc0/gXlgmRIUGphuwAAAABJRU5ErkJggg=="> 
         </button>
      </div>
         `
         singleTask.innerHTML= htmlUi;
         if(storeType == true){
            archiveModalContent.appendChild(singleTask);
         }else{
            tasksWrapper.appendChild(singleTask);
         }
         
   }
   static clear (){
       document.querySelector('#task').value = '';
       document.querySelector('#isImportant').checked = false;
   }
}
class ArchiveTask{
   static showTasks() {
      let Archive;
      if(localStorage.getItem('Archive') == null){
         Archive = [];
      }else{
         Archive = JSON.parse(localStorage.getItem('Archive'))
      }
      return Archive;
   }
   static addTaskTostore(archive){
      const Archive = ArchiveTask.showTasks();
      Archive.push(archive)
      localStorage.setItem('Archive', JSON.stringify(Archive));
   }
   static removeTaskTostore(Id) {
      const Archive = ArchiveTask.showTasks();
      const updateArchive = Archive.filter((del)=> del.id !== parseInt(Id))
      localStorage.setItem('Archive', JSON.stringify(updateArchive));
   }
}
class StoreTask{
   static showTasks() {
      let Books;
      if(localStorage.getItem('Books') == null){
         Books = [];
      }else{
         Books = JSON.parse(localStorage.getItem('Books'))
      }
      return Books;
   }
   static addTaskTostore(book){
      const Books = StoreTask.showTasks();
      Books.push(book)
      localStorage.setItem('Books', JSON.stringify(Books));
   }
   static removeTaskTostore(Id) {
      const Books = StoreTask.showTasks();
      const updateBooks = Books.filter((del)=> del.id !== parseInt(Id))
      localStorage.setItem('Books', JSON.stringify(updateBooks));
   }
   static completedTask(Id){
      const Books = StoreTask.showTasks();
      const target = Books.find((el)=> el.id == Id)
      target.completed = !target.completed;
      localStorage.setItem('Books', JSON.stringify(Books));
   }
   static TaskToArchive(Id){
      const Books = StoreTask.showTasks();
      const target = Books.find((el)=> el.id == Id)
      return target;
   }
}
/**display tasks */
document.addEventListener('DOMContentLoaded',UI.displayTasks)
document.addEventListener('DOMContentLoaded',UI.displayTasksArchive)
/**add a  task */
document.getElementById("addTaskForm").addEventListener('submit', (e)=>{
 e.preventDefault();
 const task = document.getElementById('task').value;
 const urgent = document.getElementById('isImportant').checked;
 const completed = false;
 const Id = Math.floor(Math.random() * 100);
 console.log(task, urgent, completed, Id);
 const newTask = new _Task(task,completed,urgent,Id)
 StoreTask.addTaskTostore(newTask)
 UI.addTask(newTask);
 UI.clear();
})

   tasksWrapper.addEventListener('click', (e)=>{
      e.preventDefault();
      const toDelete = e.target.closest('button.delete');
      const done = e.target.closest('button.done');
      const archive = e.target.closest('button.archive');
      if(toDelete){
         const Id = toDelete.getAttribute('data-id');
         StoreTask.removeTaskTostore(Id);
         window.location.reload();
      }else if(done){
         const Id = done.getAttribute('data-id');
         StoreTask.completedTask(Id);
         window.location.reload();
      }else if(archive){
         const Id = archive.getAttribute('data-id');
         const addToAr = StoreTask.TaskToArchive(Id)
         ArchiveTask.addTaskTostore(addToAr)
         StoreTask.removeTaskTostore(Id);
         window.location.reload();
      }else{
         return;
      } 
   })
   const archiveModalImg = document.getElementById('archiveModalImg');
   document.getElementById('GoToArchive').addEventListener('click',(el)=>{
     el.preventDefault();
     document.getElementById('archiveModal').classList.toggle('notVisible');
     const checkArchive = JSON.parse(localStorage.getItem('Archive')).length;
     if(checkArchive == 0 && !archiveModalContent.innerHTML.includes('no archived')){
       //archiveModalContent.innerHTML= "no archived tasks";
       archiveModalContent.insertAdjacentHTML("beforeend", "<h3>no archived tasks</h3>"); 
       console.log('no archived tasks',JSON.parse(localStorage.getItem('Archive')))
     }
     
     archiveModalContent.addEventListener('click', (e)=>{
      e.preventDefault();
      const toDelete = e.target.closest('button.delete');
      if(!toDelete)return;
      const Id = toDelete.getAttribute('data-id');
      ArchiveTask.removeTaskTostore(Id);
     })
   })
   archiveModalImg.addEventListener('click',(cl)=>{
      console.log(cl.target)
      document.getElementById('archiveModal').classList.add('notVisible')
    })
    