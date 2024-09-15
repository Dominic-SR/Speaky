
        document.getElementById("form").addEventListener("submit",(event) =>{


            event.preventDefault();
           
            const formObj = {
                read: event.target.read.value
            }
            console.log("hhh",formObj);

            const utterance = new SpeechSynthesisUtterance(formObj.read);

            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[0];

            speechSynthesis.speak(utterance)

            // event.target.reset()

        })