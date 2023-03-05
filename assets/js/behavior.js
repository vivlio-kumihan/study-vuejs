Vue.createApp({
    data: function() {
        return {
            email: "vivlio@kumihan.com"
        }
    },
    computed: {
        localEmail: function() {
            const str = this.email.split("@")[0]
            return str.codePointAt(0).toString(16)
        }
    }
}).mount("#app");