var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {
                    className: 'contactItem'
                },
                React.createElement('div', {
                        className: 'col'
                    },
                    React.createElement('img', {
                        className: 'contactImage',
                        src: 'http://chittagongit.com//images/icon-message/icon-message-1.jpg'
                    }),
                ),
                React.createElement('p', {
                    className: 'contactName'
                }, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {
                    className: 'contactLast'
                }, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {
                        className: 'contactEmail',
                        href: 'mailto:' + this.props.item.email
                    },
                    this.props.item.email
                )
            )
        )
    },
});