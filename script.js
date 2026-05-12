const counters = document.querySelectorAll('.count');

counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');

    const startCounter = () => {

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter, 30);

            }else{

                counter.innerText = target;

                // Igaruke itangire bushya nyuma ya second 2
                setTimeout(startCounter, 2000);
            }
        };

        updateCounter();
    };

    startCounter();
});