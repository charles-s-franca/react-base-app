class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contact: props.contact
        }
    }

    removeItem(itemCode){
        this.props.onItemRemoved(itemCode);
    }

    render() {
        const { contact } = this.state;

        return (
            <div id={'id-contact-' + contact.codap} className="col-xs-12 box-msg bottom_space40" style={{
                background: contact.selected ? '#92a011' : '',
                color: contact.selected ? 'white' : 'black'
            }}>
                <div className="box-checkbox form-bmp">
                    <div className="check-bmp">
                        <input type="checkbox" onClick={(e) => {
                            var { contact } = this.state;
                            contact.selected = !contact.selected;
                            this.setState({contact});
                        }} name="contact_records" id={"checkId_" + contact.codap} />
                        <label htmlFor={"checkId_" + contact.codap}><span></span></label>
                    </div>
                    <i className="fa fa-star-o color-black" aria-hidden="true"></i>
                </div>

                <div className="box-avatar-contacts img-circle">
                    <img src="./bmp_files/std-user.png" className="" />
                </div>

                <div className="box-contact-data">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-data">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span className="contact-email">{contact.email}</span>
                    </div>
                    <div className="contact-data phone-number">
                        <i className="fa fa-mobile" aria-hidden="true"></i>
                        <span className="contact-phone">{contact.phone}</span>
                    </div>
                </div>

                <span className="vertical-border"></span>

                <div className="contact-message">
                    {contact.message}
                </div>

                <span className="vertical-border"></span>

                <div className="box-code">
                    <a className="btn btn-default botao-mensagem-box" data-codigo="1111" onClick={() => {this.removeItem(contact.codap)}}>COD: {contact.codap}</a>
                    
                </div>

                <div className="box-contact-date">
                    <i className="fa fa-calendar" aria-hidden="true"></i> <span className="contact-date">{contact.date}</span>
                </div>

                <section className="container-fluid search-list" id="1111" style={{ display: "none" }}>
                    <div className="row">
                        <div className="col-xs-12 col-md-10 col-md-offset-1 search-results">

                            <div className="item first row">
                                <div className="item-head col-xs-12">
                                    <div className="row">
                                        <div className="col-md-8 item-index">
                                            <h2><b>Flat</b> com <b>40m<sup>2</sup></b></h2>
                                            <h3>Av. Pavão,56, Moema, São Paulo / SP</h3>
                                        </div>
                                        <div className="col-md-4 item-values">
                                            <ul className="box-values">
                                                <li className="first">Aluguel</li>
                                                <li className="last">R$2.100</li>
                                            </ul>
                                            <ul className="plus"><li>+</li></ul>
                                            <ul className="box-values">
                                                <li className="first">Condomínio</li>
                                                <li className="last">R$450</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-wrap">
                                    <div className="col-md-4 carousel">
                                        <div className="owl-carousel owl-theme">
                                            <img className="item" src="./bmp_files/imovel-6.jpg" />
                                            <img className="item" src="./bmp_files/listagem-de-imoveis-1.jpg" />
                                            <img className="item" src="./bmp_files/listagem-de-imoveis-2.jpg" />
                                            <img className="item" src="./bmp_files/listagem-de-imoveis-3.jpg" />
                                            <img className="item" src="./bmp_files/listagem-de-imoveis-4.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-8 item-infos">
                                        <div className="row wrap-head">
                                            <div className="col-md-10 about">
                                                <div className="row">
                                                    <img src="http://dev.buscandomeuape.com/corretor/contato" alt="" title="" />
                                                    <h4>Up Imob</h4>
                                                    <span>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    </span>
                                                    <label>3.5</label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 buttons-box text-center">
                                                <div className="love">
                                                    <label>Favoritos</label>
                                                    <i className="fa fa-heart-o loveactive" aria-hidden="true" title="Remover dos favoritos"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row wrap-icons">
                                            <div className="col-md-3">
                                                <img src="./bmp_files/6.svg" alt="Área" title="Área" />
                                                <label>Área</label>
                                                <p>34m<sup>2</sup></p>
                                            </div>
                                            <div className="col-md-3">
                                                <img src="./bmp_files/7.svg" alt="Quartos" title="Quantidade de quartos" />
                                                <label>Quartos</label>
                                                <p>3 (1 suíte)</p>
                                            </div>
                                            <div className="col-md-3">
                                                <img src="./bmp_files/8.svg" alt="Banheiros" title="Quantidade de banheiros" />
                                                <label>Banheiros</label>
                                                <p>2</p>
                                            </div>
                                            <div className="col-md-3">
                                                <img src="./bmp_files/9.svg" alt="Vagas" title="Quantidade de vagas" />
                                                <label>Vagas</label>
                                                <p>2</p>
                                            </div>
                                        </div>
                                        <div className="row wrap-footer">
                                            <div className="col-md-4">
                                                <i className="fa fa-share-alt" aria-hidden="true"></i>
                                                <label>
                                                    <a href="http://dev.buscandomeuape.com/corretor/contato" data-toggle="modal" data-target="#modal-share">Compartilhar
                                        </a>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                <label>Contatar</label>
                                            </div>
                                            <div className="col-md-4 details">
                                                <i className="fa fa-bars" aria-hidden="true"></i>
                                                <label><a href="http://dev.buscandomeuape.com/corretor/contato">Detalhes do imóvel</a></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
