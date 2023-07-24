$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const sendAdd = $('submit');
        const key = e.key;
        const taskVal = $('#task-input').val();
        const newTaskAdd = $('<li></li>');
                
        if((key ==='Enter') || sendAdd){
            $(`    
                <div id="check-task">
                    <button class="taskOk">
                        <span class="material-symbols-outlined"> check_circle </span>
                    </button>
                </div>
                <span class="task-name">${taskVal}</span>
                <button class="remove">
                    <span class="material-symbols-outlined"> delete </span>
                </button>
            `).appendTo(newTaskAdd);

            $(newTaskAdd).appendTo('ul'); 
            $('#task-input').val('');

        }
    });
            
        $(document).on('click','#check-task', function() {

            const taskName = $(this).siblings('.task-name');
            taskName.toggleClass("done");

                if(taskName.hasClass('done')){
                    
                    $(this).addClass("check-done");
                    $(this).find('.taskOk').css("background-color", "green");
                    taskName.css("text-decoration", "line-through");

                }else{
                    $(this).removeClass("check-done");
                    taskName.css("text-decoration", "none");
                    $(this).find('.taskOk').css("background-color", "yellowgreen");
                    };
            }) 
            
        $(document).on('click', '.remove', function() {
        $(this).closest('li').remove();

        })          

})


