$(document).ready(function() {


    $('form').submit(function(e) {
        e.preventDefault()

        var nom=$('#nom').val()
        var tel=$('#tel').val()
        var eat=$('#eat').val()
        var other=$('#otherEat').val()
        var nbreCommand=$('#number').val()
        var date=$('#date').val()
        var address=$('#address').val()
        var description=$('#description').val()

        if (nom==='') {
            $('#nom').addClass('is-invalid')
        } else {
            $('#nom').removeClass('is-invalid')
        }
        if(tel==='') {
            $('#tel').addClass('is-invalid')
        } else {
            $('#tel').removeClass('is-invalid')
        } 
        if(eat===''){
            $('#eat').addClass('is-invalid')
        } else {
        $('#eat').removeClass('is-invalid')
        }
        if (other===''){
            $('#otherEat').addClass('is-invalid')
        }  else {
            $('#otherEat').removeClass('is-invalid')
        }
        if (nbreCommand==='') {
            $('#number').addClass('is-invalid')
        } else {
            $('#number').removeClass('is-invalid')
        }
        if (date==='') {
            $('#date').addClass('is-invalid')
        } else {
            $('#date').removeClass('is-invalid')
        }
        if (address==='') {
            $('#address').addClass('is-invalid')
        } else {
            $('#address').removeClass('is-invalid')
        }
        if (description==='') {
            $('#description').addClass('is-invalid')
        } else {
            $('#description').removeClass('is-invalid')
        }

        if (nom==='' || tel==='' || eat==='' || other==='' || nbreCommand==='' || date==='' || address==='' || description==='') {

            $('.alert-success').hide(500)
        } else {
            $('.alert-success').show(500).append(nom)
        }
        
    })
    
    
    $('button#add').click(function(e) {
        e.preventDefault()
        var counter=$('span#counter').text()
        var c = parseInt(counter)
        l = c+1
        $('span#counter').text(l)

        $(this).text('Remove to card')

        var bool=$(this).text('Remove to card')
        bool.click(function() {
            l = c--
            $('span#counter').text(l)
            $(this).text('Add to card')

        })
        
    })
    
    
})