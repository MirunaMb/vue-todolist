
const { createApp } = Vue;
createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'Fare le pulizie',
                    done: false
                },
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Lavare i piatti',
                    done: false
                },
                {
                    text: 'Andare a camminare',
                    done: false
                },
                {
                    text: 'Studiare tedesco',
                    done: true
                },

            ],
        }
    }
}).mount('#app')