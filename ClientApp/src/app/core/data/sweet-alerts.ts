import swal from 'sweetalert2';

// Simple Alert
export function basicAlert() {
    swal("Here's a message!");
}

// Alert with Title
export function withTitle() {
    swal("Here's a message!", "It's pretty, isn't it?");
}

//  HTML Alert
export function htmlAlert() {
    swal({
        title: 'HTML <small>Title</small>!',
        html: 'A custom <span style="color:#F6BB42">html<span> message.'
    });
}

// Question Type Alert
export function typeQuestion() {
    swal("Question", "Are You Sure?", "question");
}

// Success Type Alert
export function typeSuccess() {
    swal("Good job!", "You clicked the button!", "success");
}

// Info Type Alert
export function typeInfo() {
    swal("Info!", "You clicked the button!", "info");
}

// Warning Type Alert
export function typeWarning() {
    swal("Warning!", "You clicked the button!", "warning");
}

// Error Type Alert
export function typeError() {
    swal("Error!", "You clicked the button!", "error");
}

// Custom Icon 
export function customIcon() {
    swal({ title: "Sweet!", text: "Here's a custom image.", imageUrl: "./assets/img/portrait/avatars/avatar-08.png" });
}

// Auto close timer
export function autoClose() {
    swal({ title: "Auto close alert!", text: "I will close in 2 seconds.", timer: 2000, showConfirmButton: false });
}

// Allow Outside Click
export function outsideClick() {
    swal({
        title: 'Click outside to close!',
        text: 'This is a cool message!',
        allowOutsideClick: true
    });
}

// Ajax Request
export function ajaxRequest() {
    swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function () {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(function (email) {
        if (email) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            });
        }
    })
}

// Button Options
export function customButton() {
    swal({
        title: '<i>HTML</i> <u>example</u>',
        type: 'info',
        html:
        'You can use <b>bold text</b>, ' +
        '<a href="//github.com">links</a> ' +
        'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
        cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Opps!'
    })
}

// Prompt Function
export function promptFunction() {
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      })
      
      var steps = [
        {
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
      ]
      
      swal.queue(steps).then((result) => {
        swal.resetDefaults()
      
        if (result.value) {
          swal({
            title: 'All done!',
            html:
              'Your answers: <pre>' +
                JSON.stringify(result.value) +
              '</pre>',
            confirmButtonText: 'Lovely!'
          })
        }
      })

}

// Confirm Button Action
export function confirmText() {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Text Changed',
        cancelButtonText: "No, cancel"
    }).then(function (isConfirm) {
        if (isConfirm) {
            swal(
                'Changed!',
                'Confirm button text was changed!!',
                'success'
            );
        }
    }).catch(swal.noop);
}

// Confirm & Cancel Button
export function confirmCancelButton() {
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0CC27E',
        cancelButtonColor: '#FF586B',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success btn-raised mr-5',
        cancelButtonClass: 'btn btn-danger btn-raised',
        buttonsStyling: false
    }).then(function () {
        swal(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
        )
    }, function (dismiss) {
        // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        if (dismiss === 'cancel') {
            swal(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })    
}

// Chaining modals / Steps
export function steps() {
    swal.setDefaults({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      cancelButtonColor: '#FF586B',
      animation: false
    });
    
    var steps = [
      {
        title: 'Step 1',
        text: 'Chaining modals is easy with Step 1'
      },
      {
        title: 'Step 2',
        text: 'Chaining modals is easy with Step 2'
      },
      {
        title: 'Step 3',
        text: 'Chaining modals is easy with Step 3'
      },
    ];
    
    swal.queue(steps).then(function() {
      swal({
        title: 'All done!',
        text: 'Great job :)',
        confirmButtonText: 'Lovely!',
        showCancelButton: false
      });
    }).then(function() {
      swal.resetDefaults();
    }).catch(swal.noop);
}