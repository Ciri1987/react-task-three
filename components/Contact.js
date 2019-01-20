var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {
                    className: 'contactItem row'
                },
                React.createElement('div', {
                        className: 'col'
                    },
                    React.createElement('img', {
                        className: 'contactImage',
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2lI_xWihFGfnbHaUFk8KGi4e9I5TWMXa7IZGzAUr5oEOWTAj'
                    }),
                ),
                React.createElement('p', {
                    className: 'contactLabel col'
                }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {
                    className: 'contactLabel col'
                }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {
                        className: 'contactEmail col',
                        href: 'mailto:' + this.props.item.email
                    },
                    this.props.item.email
                )
            )
        )
    },
});