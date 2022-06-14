
const listContainer=document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')



	


const LOCAL_STORAGE_LIST_KEY='task2.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY='task2.listID'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY))||[] 
let selectedListId=localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)



clearCompleteTasksButton.addEventListener('click',e=>{
	const selectedList=lists.find(list=>list.id===selectedListId)

	selectedList.tasks=selectedList.tasks.filter(task=>!task.complete)

	saveAndRender()
})

deleteListButton.addEventListener('click',e=>{
	lists=lists.filter(list=>list.id!==selectedListId)
	selectedListId=null
	saveAndRender()
})


tasksContainer.addEventListener('click',e=>{
	if(e.target.tagName.toLowerCase()==='input')
	{
		const selectedList=lists.find(list=>list.id===selectedListId)
		const selectedTask=selectedList.tasks.find(task=>task.id===e.target.id)

		selectedTask.complete=e.target.checked

		save()
		renderTaskCount(selectedList)
	}
})


listContainer.addEventListener("click",e=>{
	if(e.target.tagName.toLowerCase()==='li')
	{
		selectedListId=e.target.dataset.listID

		saveAndRender()
	}
})




newListForm.addEventListener('submit',e=>{
	e.preventDefault()

	const listName=newListInput.value
	if(listName==null||listName==='') return
	const list=createList(listName)
	newListInput.value=null
	lists.push(list)

	saveAndRender()
})


newTaskForm.addEventListener('submit',e=>{
	e.preventDefault()

	const taskName=newTaskInput.value
	if(taskName==null||taskName==='') return
	const task=createTask(taskName)
	newTaskInput.value=null


	const selectedList=lists.find(list=>list.id===selectedListId)
	selectedList.tasks.push(task)

	saveAndRender()
})




function createTask(name)
{
	return {id:Date.now().toString(),name:name,complete:false}
}

function createList(name)
{
	return {id:Date.now().toString(),name:name,tasks:[]}
}


function saveAndRender()
{
	save()
	render()
}

/*RENDER FUNCTION START*/
function render()
{
  let selectedList=lists.find(list=>list.id===selectedListId)

  clearElement(listContainer)

  renderList()

  if (selectedListId===null) 
  {
  	listDisplayContainer.style.display='none'
  }
  else
  {
  	listDisplayContainer.style.display=''
  	listTitleElement.innerText=selectedList.name
  	renderTaskCount(selectedList)

  	clearElement(tasksContainer)
  	renderTask(selectedList)
  }
}
/*RENDER FUNCTION END*/

function renderTask(selectedList)
{
	selectedList.tasks.forEach(task=>{
		const taskElement=document.importNode(taskTemplate.content,true)
		const checkbox=taskElement.querySelector('input')
		const label=taskElement.querySelector('label')

		checkbox.id=task.id
		checkbox.checked=task.complete
		label.htmlFor=task.id
		label.append(task.name)

		tasksContainer.appendChild(taskElement)

	})
}


function renderTaskCount(selectedList)
{
	const incompleteTaskCount=selectedList.tasks.filter(task=>!task.complete).length
	const taskString=incompleteTaskCount===1 ? "task":"tasks"

	listCountElement.innerText=`${incompleteTaskCount} ${taskString} remaining`
}



function save()
{
	localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
	localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY,selectedListId)
}

function renderList()
{
	lists.forEach(list=>{
  	const listElement=document.createElement('li')
  	listElement.dataset.listID=list.id
  	if(list.id===selectedListId)
  	{
  		listElement.classList.add('active-list')
  	}
	listElement.classList.add("list-name")
	listElement.innerText=list.name
	listContainer.appendChild(listElement)
  })
}

function clearElement(element)
{
	while (element.firstChild)
	{
		element.removeChild(element.firstChild)
	}
}

render()