var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', {
                    className: 'contactForm'
                },
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Imię',
                    value: this.props.contact.firstName,
                    className: 'form',
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName,
                    className: 'form',
                }),
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                    className: 'form',
                }),
                React.createElement('button', {
                    className: 'btn',
                    type: 'submit'
                }, "Dodaj kontakt")
            )
        )
    },
})