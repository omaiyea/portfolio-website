//show menu on mobile
function handleMobileMenu(){
    $('.display-icon').click(function(){
        $('ul').toggleClass('display-menu');
    });
}

//show the menu when user scrolls down far enough
function showMenuScroll(){
    $(document).scroll(function(){
        var y = $(this).scrollTop();
        if(y > 400){ //make start to appear sooner than header ends
            $('nav').fadeIn();
        }else{
            $('nav').fadeOut();
        }
    });
}

function handleButtonClick(){
    $('button').click(function(){
        let buttonId = `#` + this.id.substr(0, this.id.indexOf('-'));
        $('html, body').animate({
            scrollTop: $(buttonId).offset().top
        }, 900);
    });
}

//shows/hides answers for question that user cliks
function toggleQuestion(){
    $('.question').click(function(){
        $(this).find('.answer').toggleClass('hidden');
    })
}

//fill skills bar on scroll
function showSkillsScroll(){
    var skillsDiv = $('#skills');

    $(window).on('scroll', function(){
        var winT = $(window).scrollTop(),
          winH = $(window).height(),
          skillsT = skillsDiv.offset().top;
      if(winT + winH  > skillsT){
          $('.bar-container').each(function(){
              console.log($(this))
            $(this).find('.bar').animate({
                width:$(this).attr('data-percent')
            },6000);
        });
      }
    });    
}

function handleApp(){
    handleMobileMenu();
    showMenuScroll();
    handleButtonClick();
    toggleQuestion();
    showSkillsScroll();
}

$(handleApp);