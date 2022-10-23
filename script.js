const tasksWrapper = document.querySelector('.tasksWrapper');
console.log(tasksWrapper)
class task{
     constructor(task,completed,important){
       this.task= task;
       this.completed = completed;
       this.important = important;
    } 
    tasksList = [
         {
         id: 1,
         task:"is task",
         completed: true,
         important: false
         },
         {
         id: 2,
         task:"is task added ",
         completed: true,
         important: false
         }
    ]
    Ui(e){
      return `
      <div class="singleTask">
      <span class="${e.completed == true ? 'comptetedTask':''}
                   ${e.important == true ? 'urgent':''}">
                   ${e.task}
      </span>
      <button class="done action">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGMUlEQVR4nO2ba6gVVRTHfytf18xIJSuhfGFamuQjUMrQ8hGZWUaKmtSHLEJJMIIMJc2S0g8miRmlUYKFBnYV7eEDjEhvBaWYYWWaqOUjzcpXav8+7H1tHGfOmXvnzDnHrn8Yzp3Za/577TX7sfba68JF1G1YWgJJnYA3gFYRxXuAsWa2rdy4CwZJ7yo3FpcjdzUuSUsANE9ZnubdFim4gcIY4ILGRQOUWoFSo84boH4+AUkVwFCgN3AVUM8XbTOzKUkrkvQCcH1C8ZpyTwc6+tszwD7gc6DSzE4m5Yki7iPp55glaKOX+TDPUrXSy1XlkasN9yovtzGmfIek23K1MbYHSOoNrAYaxYh0lNQImItzqOpFyJwB5sr1oo4R5XGoKXenGJ42wGpJfc2sKnHtkupJ2prgSy3wCuTiqpD0VgKuLLm3SIoyYrQrLKkfsC6hvX4HNgN/R5Q1BLoCVyTkypK7r5mtDz+MGwI9E5LiFbi9BvI1QSG5ewDnGSBuGby8QJWWE5pFPazzfsBFA5RagVKjzhsgryucAGuAJcCOAnDVBG2BEcCdaUjS9oCpZjYAWI7zzIqFMzg/vz8wPQ1Rmh6wCXhe0qPAPKBBGkVqgVOSngCmAvcDXWpDEucJDgXuzvPuOlzXP0TtPb20OIwLiw0H7sgju8rMKsMPU0WFJdUH/iJ+w5Q1TgBNzex0bQki5wBJEyVtD1wbouR8xQtqW3kBsCCu8ZI2hNowMUoubg5oBrQL3DfOocR44CPgxiQaFwgCtgIrc8i0Bq4J3Ee6wqmXQTMTsMJfFxzqvCNUdgaQZJLGS1ot6TVJLbOsrxCeYMEgyYD5wGP+UX+gM9nFG8qnB0Q0vhp9JDXNqt6yMECOxgPsNLM/s6o78yEgaTDQAeeJfR9Rnqvxx4FHstUwApKmh6Kqe2vJ80qA47ikYaFyk/R6TCT3mKT+KdqwN8QXuWnKbAhIagyMCzyqAN6rNkKCLz/EzNZkpV81shwCp/0VrKMBzgizgBtwu7gwjgH3mtnaDHU7i8x6gJmdwm1Vw2gAPEsZNB4yXgXM7GXgxYTiRW88FGEZNLPJ5DdCSRoPRfID8hihZI2HIjpC3ghTOTd2uB+4p1SNhyLvBcxsmqRlOB//CC6webCYOoRR9M2QmW3GnfiWBcpiL1BKpDKApOaSlkj6VNJCSYO8hxeWayZpit/jr/WudstAeT9Jy8J7f0kTJI3zf7fx734VuDZI6pWmDWl7wGjgQf/3YFxs8H1JTaoFJHUBvgWeA5ri4ovPAFsl3eLFRgD3ATND/MP8BTAQF/o+iguHH8aF5I+laUDaOeBS/zsI5/aOB2bhEpxH+f1AJS6IeWt1no6km4FlwAeSOvNfeH6MpHlm9kVEXdUfa7iZ7Uup93mkqWFmp8xsNjANGCmpJ/AwLro8NpikZGbfAGNwUdvH/eNDwK/AnKhhlBWymATnACeBB4C7gF1mtiosZGafAVu8DLhDjklAL9zQikNrSe381TqtsgU3gJn9gcvlvw73hX/IIb6Nc/8XYBFQBbwk6bKYd6qA7f7aKWlUGn0L7gdIaojLKN2PS3dvm0P8WlzXB9wZg6QJwAbcRBmFsTgnCpxX+XEafZMaIGe+XggjgSY4xfYBAyV1M7Ovg0KSOgDdgNkETm3MrErSIuAp4BfOzztYkXASzHWadRZJh0CzJPF5H8J6FZen+wnwJu5rLZTUKiB3JfA2Lv9vbgTVJNyqkqv35NLjahKeWNdkCIzGfa0gTvnfmZK6An1wE9twM/sHOOjH6DJgk98HnMGt+S2AUWa2W9I5pGa2V9IMYEawXf53sqSjgfrnm9meCF1rj4igqCT9JqlNSK69pG2SjnjP7Gm/9of5bpK0VNI+SQckVUrqESh/Uj6pOvCsQtJ6SdP8fXevQxAn5aLOwffaSjoUoX/yTBJJ0yIIJHfM3D0xUZEhqYekn2J0jwrPxQ6BuDB4O+BLSctxmeQHCqB3IdASGAAMIX5e2x31MC5Fpg3wI9Fp6hciTgPtzWxXuCDSWma2Exez/79gXlTjIUeOkJxDsxjn0l7IWAo8ZGZRKff5k6TkMsbG4A4yauIQlRIngO+Ad8xseamVuYhyxr9jdNIy21ft5QAAAABJRU5ErkJggg==">
      </button>
      <button class="delete action">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVR4nO2azVHDMBCFnxhm0kMItAA3aIGBNoALoRiO1MHQAsmJnGjASQPgC6fHwXHGmMh2ZK9WifTdMtHP08tau3IEJBLOkByRfCI5I5nTTr5uMyU50tY9CCRPSC4aFm3jg+SJtv5erH95l8VXTdjfSGAR9n151F6HMyTntcW8siGsSU5IvtX6vPvUPCgkv2uLmXToc1rr8+VDaxvGpRNJ/hnEmE7juPaT5EhbgDbJAG0B2vwzgB2quy19OtGxn17VSPfqTgrxqnGzC7Nwew7gXHJCBxYArowxPxKDVx+BB4S3eAC4AHAnPgt3rO4EdehUjXSo7gS1eKsaq3tAUFWaLz3R1wHHti/qv8ChEn0EVA1YqqloJ5MauGrAPcI0IUOhTQTrzuo7K2hlobQHaAvQJhmgLUCbZID0BCRvSC7b3nxs6SdFRvK6nEc8DZLMAKidLC1kxpgzwI8BQZ4pyvVEvwdYT4NSaL1nsEVi9BGQDNAWQHJlSVfjSpvxjqlu1XX+XnvAUJlCE/UI0CZ6A3oVQkO18YFNR/QREL0BvbKASziHdjaIPgKSAdoCtPFeCYaSBkuij4BkgLYA7dOgugHaRG+A90owNLy/Fg8lDXY5Dea1AUL7c2MQmgz4rH1+OUQTmh6BKYBnj1q8Uj4CTQaMAMxQ3NU9OFr3gPXt7FsUt7UPjc2ts8Y6wBizAnAJYIoiGvKm9nuC6K2zxL7xC0vOR4rWFYc4AAAAAElFTkSuQmCC">                
      </button>
      <button class="archive action">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAESElEQVR4nO2by4sdRRjFf18mid68HCPOyhmMGqLJCIqOShYazSwkiriIoiCIWSiirmQUxIX+DyK6EQVxJCouszITXPqIGpDRBHxMDEHJQxOYyUwex0X1Tdqbe7urq/pOgdMH7qbu1+d8deh6dPdXsMRhPkGSrgGeBG4GVkToCZgBPjWzgx0am4CdwLBvXj1wFvgJmDSz4xE8FxMbl3RS9eKcpImcxqtZW504IWl7Wf8KnZY0AvwIrIl2sjseBQaAz/rEfxrYbGZ/9ApYVkLwPP3rPMArwERpVDjW4vrQE8tLCG6rL5euuJ248e6r0RNlBlxZYyLd0Oozf6lG2RD432PJG1A2BHzwC/AN8HeubRVuz3AH8WNcGf/PwGyufRAYAzZE8hcoS1MF6+wZSc9I6tlBSVslzUSs5TOS7ingN0m7slx6YapfBjzryXGrpIWAzs9L2uKp8dxiG3BEkvf8IWl3gAEfV+AfkHQ0xIDQSfCAmV2oEL8/QON730AzOw/8EKARbMB8n+NDrjkToNEsg9EGSHpH0usdbeOSvpYUvcxKWp5xjXe0vybp3Vj+Ou6Au3HrfR6jwJ3U8yC1JuMa7WgfA+6KJW+GQOoEUqMxIHUCqdEYkDqB1GgMSJ1AajQGpE4gNRoDUieQGo0BqRNIjcaA1AmkRmNA6gRSozEgdQKpUYcBp7NfZ9s8Yd8DOtHmOeWhWxl1fB3eyeUfJT4A9prZXCy5mc1JugU43PHXS8AVsfzRBpjZX13azgG/xnLn+C7jMrN/6uAOHQJV3/evDdBYvQgawQaMSVpVIf6+AA3vayStxn0oqYxQA9YBb/gESnoYeCBAY1zSQ56xbxJ4BxSioD6gjbckDfW4tiXpRUmzAbUBbcxKekFS10ovSUOS3i7hKKwPKKsUnQK2lfh0Hjfh5SelFq52p64yuLlMI7+qDALX4ypNi7DPzO7v9Wcdy+AAcFMNPEVoAZv7QdzsBFMnkBqxQ2AemAS+BRZy7cuAjcBTQNdJsgL+BD4EDuFqBttYiasbeIIadoRdUbIKHJbbohZdPyhpb8Qq8IWkq0o0tmS5BK0CMQbc68mxXtLxgM4fk3S1p8a2UANC54BpM/vSJ9DMTgCfBGjsNrOTnhr7cKW0lRFqwG8V40MejH5fBI1gA4Yrxo8EaFy3CBrBBoyqoIg5D7lJ7LEAjcclrfPU2ErgRilmH/CRpBuKAuSe0iaBawP4h4DJjKNI40bcMhmEmH3ABuCApPeBr/jvPn0FsAnYRfVbOY8dwLSk94CDuDOBbbRwNYpPU/3dwUWUPQztAR4MJffAXJZDP88m7TGzHb3+LBsC39WcTCf2L5JGT5TdAcO4g5P1v2xweAT3NPl5n/hP4Q5OHglmkLQ9cCdXhLOSXs5pTGRtdeKYpNI3Ub6Hp9dz6fD0ymA34QKXDk8f6tDYiHvFPkLc6rQATOMOT3vtJJc0/gXlgmRIUGphuwAAAABJRU5ErkJggg=="> 
      </button>
   </div>
      `;
    }
    render (){
       this.tasksList ? tasksWrapper.insertAdjacentHTML("afterend", this.tasksList.map((e,id)=>{this.Ui(e)})) : tasksWrapper.insertAdjacentHTML("afterend", "<p>No task </p>")
    }
    
    // actions 
    // add a task 
    // delete a task
    //task by me
}

const todo = new task('this is a new task', false, true);
console.log(todo.tasksList,todo.render, todo.Ui)
todo.Ui;
todo.render;