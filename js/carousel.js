$(function() {
    
    $(window).resize(() => {
        
        $('#first-responsive-carousel').css('transform', 'translateY(' + (-$('#first-responsive-carousel').children().first().height() * $('#first-responsive-carousel').attr('counter')) + 'px)');
        $('#second-responsive-carousel').css('transform', 'translateY(' + (-$('#second-responsive-carousel').children().first().height() * $('#second-responsive-carousel').attr('counter')) + 'px)');
        
        $('#first-carousel').css('transform', 'translateY(' + (-$('#first-carousel').children().first().height() * $('#first-carousel').attr('counter')) + 'px)');
        $('#second-carousel').css('transform', 'translateY(' + (-$('#second-carousel').children().first().height() * $('#second-carousel').attr('counter')) + 'px)');
        $('#third-carousel').css('transform', 'translateY(' + (-$('#third-carousel').children().first().height() * $('#third-carousel').attr('counter')) + 'px)');
        $('#fourth-carousel').css('transform', 'translateY(' + (-$('#fourth-carousel').children().first().height() * $('#fourth-carousel').attr('counter')) + 'px)');
        
    });
    
    $('#first-responsive-carousel').css('transform', 'translateY(' + (-$('#first-responsive-carousel').children().first().height() * $('#first-responsive-carousel').attr('counter')) + 'px)');
    $('#second-responsive-carousel').css('transform', 'translateY(' + (-$('#second-responsive-carousel').children().first().height() * $('#second-responsive-carousel').attr('counter')) + 'px)');
    
    $('#first-carousel').css('transform', 'translateY(' + (-$('#first-carousel').children().first().height() * $('#first-carousel').attr('counter')) + 'px)');
    $('#second-carousel').css('transform', 'translateY(' + (-$('#second-carousel').children().first().height() * $('#second-carousel').attr('counter')) + 'px)');
    $('#third-carousel').css('transform', 'translateY(' + (-$('#third-carousel').children().first().height() * $('#third-carousel').attr('counter')) + 'px)');
    $('#fourth-carousel').css('transform', 'translateY(' + (-$('#fourth-carousel').children().first().height() * $('#fourth-carousel').attr('counter')) + 'px)');
    
    function onTransitionEnd() {
        
        var counter = $(this._targets[0]).attr('counter');
        
        $(this._targets[0]).attr('data', 0);
        
        if($(this._targets[0]).children()[counter].id == 'image5') {
            
            var size = $(this._targets[0]).children().first().height();
            var new_counter = $(this._targets[0]).children().length - counter;
            
            $(this._targets[0]).attr('counter', new_counter);
            $(this._targets[0]).css('transform', 'translateY(' + (-size * new_counter) + 'px)');
            
            return false;
            
        }
        
        if($(this._targets[0]).children()[counter].id == 'image1') {
            
            var size = $(this._targets[0]).children().first().height();
            var new_counter = $(this._targets[0]).children().length - counter - 2;
            
            $(this._targets[0]).attr('counter', new_counter);
            $(this._targets[0]).css('transform', 'translateY(' + (-size * new_counter) + 'px)');
            
            return false;
            
        }
        
    }
    
    /*var interval = setInterval(() => {
        
        onUp($('#second-carousel'), 1.2);
        onDown($('#fourth-carousel'), 1.2);
        
        setTimeout(() => {
            
            onUp($('#third-carousel'), 0.6);
            onDown($('#first-carousel'), 0.6);
            
        }, 400);
        
    }, 6000);
    
    $(window).focus(function() {
        
        interval = setInterval(() => {
            
            onUp($('#second-carousel'), 1.2);
            onDown($('#fourth-carousel'), 1.2);
            
            setTimeout(() => {
                onUp($('#third-carousel'), 0.6);
                onDown($('#first-carousel'), 0.6);
            }, 400);
            
        }, 6000);
        
    }); 
    
    $(window).blur(function() {
        
        clearInterval(interval);
        
    });*/
    
    /*setTimeout(() => {
        
        onUp($('#second-carousel'), 1.2);
        onDown($('#fourth-carousel'), 1.2);
        
        setTimeout(() => {
            
            onUp($('#third-carousel'), 0.6);
            onDown($('#first-carousel'), 0.6);
            
        }, 400);
        
    }, 3000);
    
    setTimeout(() => {
        
        onUp($('#second-carousel'), 1.2);
        onDown($('#fourth-carousel'), 1.2);
        
        setTimeout(() => {
            
            onUp($('#third-carousel'), 0.6);
            onDown($('#first-carousel'), 0.6);
            
        }, 400);
        
    }, 6000);*/
    
    /*setTimeout(() => {
        
        onUp($('#second-carousel'), 1.2);
        onDown($('#fourth-carousel'), 1.2);
        
        setTimeout(() => {
            
            onUp($('#third-carousel'), 0.6);
            onDown($('#first-carousel'), 0.6);
            
        }, 400);
        
    }, 9000);*/
    
    function onUp(element, duration) {
        
        if(element.attr('data') == 0) {
            
            var size = element.children().first().height();
            var initial = (-size * (element.attr('counter') * 1));
            var counter = (element.attr('counter') * 1) + 1;
            
            element.attr('counter', counter);
            element.attr('data', 1);
            TweenLite.fromTo(element, duration, {y: initial}, {y: (-size * counter), ease: Circ.easeInOut, onComplete: onTransitionEnd});
            
        }
        
    }
    
    function onDown(element, duration) {
        
        if(element.attr('data') == 0) {
            
            var size = element.children().first().height();
            var initial = (-size * (element.attr('counter') * 1));
            var counter = (element.attr('counter') * 1) - 1;
            
            element.attr('counter', counter);
            element.attr('data', 1);
            TweenLite.fromTo(element, duration, {y: initial}, {y: (-size * counter), ease: Circ.easeInOut, onComplete: onTransitionEnd});
            
        }
        
    }
    
    $('.controls .right').click(function() {
        
        if($('#second-carousel').attr('data') == 0 && $('#fourth-carousel').attr('data') == 0) {
            
            setTimeout(() => {
                
                onUp($('#third-carousel'), 0.6);
                onDown($('#first-carousel'), 0.6);
                
            }, 400);
            
        }
        
        onUp($('#second-carousel'), 1.4);
        onDown($('#fourth-carousel'), 1.4);
        
    });
    
    $('.controls .left').click(function() {
        
        if($('#second-carousel').attr('data') == 0 && $('#fourth-carousel').attr('data') == 0) {
            
            setTimeout(() => {
                
                onDown($('#third-carousel'), 0.6);
                onUp($('#first-carousel'), 0.6);
                
            }, 400);
            
        }
        
        onDown($('#second-carousel'), 1.4);
        onUp($('#fourth-carousel'), 1.4);
        
    });
    
    $('.responsive-controls .right').click(function() {
        
        if($('#first-responsive-carousel').attr('data') == 0 && $('#second-responsive-carousel').attr('data') == 0) {
            
            setTimeout(() => {
                
                onDown($('#first-responsive-carousel'), 0.6);
                
            }, 400);
            
        }
        
        onUp($('#second-responsive-carousel'), 1.4);
        
    });
    
    $('.responsive-controls .left').click(function() {
        
        if($('#first-responsive-carousel').attr('data') == 0 && $('#second-responsive-carousel').attr('data') == 0) {
            
            setTimeout(() => {
                
                onUp($('#first-responsive-carousel'), 0.6);
                
            }, 400);
            
        }
        
        onDown($('#second-responsive-carousel'), 1.4);
        
    });
    
});