$(function() {
    
    const options = {
        threshold: [0.5, 1]
    }
    
    const observer = new IntersectionObserver((entries, observer) => {
        
        entries.forEach((entry, index) => {
            
            if(entry.intersectionRatio >= 0.5) {
                
                TweenLite.to(entry.target, 1, {width: '100%', ease:Power3.easeOut, delay: 0.2});
                observer.unobserve(entry.target);
                
            }
            
        });
        
    }, options);
    
    const footer_line = document.querySelectorAll('footer > div > div > div > div > div > span:nth-child(2)');
    
    footer_line.forEach((element) => {
        
        observer.observe(element);
        
    });
    
});