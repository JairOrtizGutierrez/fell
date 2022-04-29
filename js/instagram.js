$(function() {
    
    const instagram_observer = new IntersectionObserver((entries, observer) => {
        
        entries.forEach((entry, index) => {
            
            if(entry.intersectionRatio >= 0.5) {
                
                if($(window).width() <= 767) {
                    
                    $(entry.target).css('backgroundColor', 'rgba(0, 0, 0, 0.5)');
                    $(entry.target).children().first().css({'opacity': '1', 'visibility': 'visible'});
                    $(entry.target).children().last().css({'opacity': '1', 'visibility': 'visible'});
                    
                }
                
            } else {
                
                if($(window).width() <= 767) {
                    
                    $(entry.target).css('backgroundColor', 'transparent');
                    $(entry.target).children().first().css({'opacity': '0', 'visibility': 'hidden'});
                    $(entry.target).children().last().css({'opacity': '0', 'visibility': 'hidden'});
                    
                }
                
            }
            
        });
        
    }, {threshold: [0.5, 1]});
    
    const instagram_images = document.querySelectorAll('.instagram-image a');
    
    instagram_images.forEach((element) => {
        
        instagram_observer.observe(element);
        
    });
    
});