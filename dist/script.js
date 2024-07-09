"use strict";

$('#taskModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var task = button.data('task');
  var modal = $(this);
  modal.find('.modal-body').text(task);
});