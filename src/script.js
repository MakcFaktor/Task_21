$('#taskModal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let task = button.data('task');
    let modal = $(this);
    modal.find('.modal-body').text(task);
});