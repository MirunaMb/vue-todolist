
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
    },
    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        addNewTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    text: this.newTask,
                    done: false
                });
                this.newTask = '';
            }
        }
    }
}).mount('#app')