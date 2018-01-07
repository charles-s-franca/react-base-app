class ContactList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            loading: true
        }
    }

    componentWillMount() {
        this.getData();
    }

    async getData() {
        var self = this;

        return fetch("http://rtmessage-api.azurewebsites.net/api/user")
            .then(function (response) { return response.json(); })
            .then(function (data) {
                const contacts = [
                    {
                        name: "Aline Souza",
                        email: "alinealinealinealine@contato.com",
                        phone: "11 98356-5651",
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut odio ac odio hendrerit aliquet. Curabitur egeturpis. Curabitur efficitur auctor eros ut tincidunt.",
                        codap: "AP 0001",
                        date: "15/02/1989"
                    },
                    {
                        name: "Aline Alves",
                        email: "alinealinealinealine@contato.com",
                        phone: "11 98356-5658",
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut odio ac odio hendrerit aliquet. Curabitur egeturpis. Curabitur efficitur auctor eros ut tincidunt.",
                        codap: "AP 0002",
                        date: "15/02/1989"
                    },
                    {
                        name: "Aline Ferreira",
                        email: "alinealinealinealine@contato.com",
                        phone: "11 98356-5658",
                        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut odio ac odio hendrerit aliquet. Curabitur egeturpis. Curabitur efficitur auctor eros ut tincidunt.",
                        codap: "AP 0003",
                        date: "15/02/1989"
                    }
                ]

                self.setState({ contacts, loading: false })
            });
    }

    onItemRemoved(itemCode) {
        var itens = this.state.contacts;
        itens = itens.filter(i => i.codap != itemCode);

        this.setState({ contacts: itens });
    }

    listContacts() {
        const { contacts } = this.state;
        if (!contacts || contacts.length == 0)
            return (
                <h1>Nenhum item encontrado.</h1>
            )

        return contacts.map((item, index) => {
            return (
                <Contact
                    key={item.codap}
                    contact={item}
                    onItemRemoved={(itemCode) => {
                        this.onItemRemoved(itemCode);
                    }}
                />
            )
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.loading ? 'Carregando...' : (this.listContacts())}
            </div>
        );
    }
}