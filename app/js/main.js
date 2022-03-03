/**
 * Header effects
 */
let prevScrollpos = window.pageYOffset,
    header = document.querySelector('.site-header');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if ( currentScrollPos > 50 ) {
        header.classList.add( 'is-scrolled' )
    } else {
        header.classList.remove( 'is-scrolled' )
    }
    if (  currentScrollPos > 10 ) {
        if ( prevScrollpos > currentScrollPos ) {
            header.classList.remove('is-hidden');
        } else {
            header.classList.add('is-hidden');
        }
    }
    prevScrollpos = currentScrollPos;
}

/**
 * Cart
 */
function showMiniCart() {
    let miniCart = document.getElementById( "mini-cart" );
    if ( miniCart ) {
        miniCart.classList.add( "is-open" );
        window.addEventListener('click', closeCartByOutsideClick );
    }
}

function closeMiniCart() {
    document.getElementById( "mini-cart" ).classList.remove( "is-open" );
    window.removeEventListener('click',  closeCartByOutsideClick );
}

function closeCartByOutsideClick( event ) {
    if ( ! document.getElementById( "mini-cart" ).contains( event.target ) && ! document.getElementById( "mini-cart-open" ).contains( event.target ) ){
        closeMiniCart();
    }
}

document.getElementById( "mini-cart-open" ).addEventListener( "click", showMiniCart );
document.getElementById( "mini-cart-close" ).addEventListener( "click", closeMiniCart );

jQuery( 'body' ).on( 'added_to_cart', function( e, fragments, cart_hash, this_button ) {
    showMiniCart()
} );