Array.from( document.getElementsByClassName( "faq" ) ).forEach( ( item ) => {

    // Search capabilities.
    new List(
        item,
        {
            valueNames: [ 'question' ]
        }
    );

    // Expand question to show answer.
    let questionToggle = item.querySelectorAll( '.question' );
    if ( questionToggle.length > 0 ) {
        Array.from( questionToggle ).forEach( ( toggle ) => {
            toggle.addEventListener("click", ( event ) => {
                event.target.parentNode.classList.toggle("is-shown");
            } );
        } );
    }

    // Search input events.
    document.querySelector('input.search').addEventListener('input', ( event ) => {

        // Collapse all visible answers.
        let questionToggleExpanded = item.querySelectorAll( '.faq__list__row.is-shown' );
        if ( questionToggleExpanded.length > 0 ) {
            Array.from( questionToggleExpanded ).forEach( ( toggle ) => {
                toggle.classList.remove('is-shown');
            } );
        }
    } );
} );