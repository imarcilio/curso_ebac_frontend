$(document).ready(() =>{

    let endereco;
    let bairro;
    let cidade;
    let estado;
    let cepnro;
    let flag;

    $('#phoneNum').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').on('submit', (e) =>{
        e.preventDefault();

        const personName = $('#nome').val();   
        const personMail = $('#email').val();
        const personTel = $('#phoneNum').val();
        const personCpf = $('#cpf').val();
        let personAddNumber = $('#homeNum').val();
        const moreAddInfo = $('#addressAdictional').val();
        const newRow = $('.newtr').val();
        //const fullAddress = [{endereco},{personAddNumber},{bairro}, {cidade}, {estado}, {cepnro}]

        alert(
                        
                `Formulário submetido com sucesso!
                Nome: ${personName}
                Email: ${personMail}
                Telefone: ${personTel}
                CPF: ${personCpf}
                Endereço: ${endereco}
                Numero: ${personAddNumber}
                Complemento: ${moreAddInfo}
                CEP: ${cepnro}
                Bairro: ${bairro}
                Cidade: ${cidade}
                UF: ${estado}
            `)

        $('#tableBody').prepend
            
                (`
                    <tr class="newRow">
                        <td>${personName}</td>
                        <td>${personMail}</td>
                        <td>${personTel}</td>
                        <td>${personCpf}</td>
                        <td>
                            <img id="bandeira" src="" alt="Bandeira ${estado}">
                        </td>
                        <td>
                            <div class="infoAction">
                                <div class="infoBtn">
                                        <div class="btn">
                                            <span id="showInfo" class="material-symbols-outlined btnyellow">
                                                expand_circle_down </span>
                                        
                                            <div class="fullInfo" id="infoComplete">
                                                <div class="container-info">
                                                    <div class="baloonheader">
                                                        <h3>Dados Completos</h3>
                                                        <span id="close" class="material-symbols-outlined">cancel</span>
                                                    </div>
                                                    <div>
                                                        <ul>
                                                            <li>Nome:${personName}</li>
                                                            <li>Email:${personMail}</li>
                                                            <li>Telefone:${personTel}</li>
                                                            <li>CPF:${personCpf}</li>
                                                            <li>Logradouro:${endereco}</li>
                                                            <li>Número:${personAddNumber}</li>
                                                            <li>Bairro:${bairro}</li>
                                                            <li>Cidade:${cidade}</li>
                                                            <li>CEP:${cepnro}</li>
                                                            <li>UF:${estado}</li>
                                                            <li>Complemento:${moreAddInfo}</li>
                                                        </ul>
                                                    </div>
                                                    <!-- VERSAO 2.0
                                                        <div class="keys">
                                                        <span class="material-symbols-outlined">mail</span>
                                                        <span class="material-symbols-outlined">call</span>
                                                        <span>
                                                            <img src="" alt="">
                                                        </span>
                                                        <span class="material-symbols-outlined">directions </span>
                                                            
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="infoBtn">
                                    <span id="deleteInfo" class="material-symbols-outlined">
                                        cancel
                                        </span>
                                </div>
                            </div>
                        <td>            
            `).appendTo(newRow);
            $(newRow).appendTo('tbody'); 
            $('input').val('');
    
        const statesArray = [
                    { estado: 'Acre', uf: 'AC', link: './src/svg/acre.svg' },
                    { estado: 'Alagoas', uf: 'AL', link: './src/svg/alagoas.svg' },
                    { estado: 'Amapá', uf: 'AP', link: './src/svg/amapa.svg' },
                    { estado: 'Amazonas', uf: 'AM', link: './src/svg/amazonas.svg' },
                    { estado: 'Bahia', uf: 'BA', link: './src/svg/bahia.svg' },
                    { estado: 'Ceará', uf: 'CE', link: './src/svg/ceara.svg' },
                    { estado: 'Distrito Federal', uf: 'DF', link: './src/svg/distrito-federal.svg' },
                    { estado: 'Espírito Santo', uf: 'ES', link: './src/svg/espirito-santo.svg' },
                    { estado: 'Goiás', uf: 'GO', link: './src/svg/goias.svg' },
                    { estado: 'Maranhão', uf: 'MA', link: './src/svg/maranhao.svg' },
                    { estado: 'Mato Grosso', uf: 'MT', link: './src/svg/mato-grosso.svg' },
                    { estado: 'Mato Grosso do Sul', uf: 'MS', link: './src/svg/mato-grosso-do-sul.svg' },
                    { estado: 'Minas Gerais', uf: 'MG', link: './src/svg/minas-gerais.svg' },
                    { estado: 'Pará', uf: 'PA', link: './src/svg/para.svg' },
                    { estado: 'Paraíba', uf: 'PB', link: './src/svg/paraiba.svg' },
                    { estado: 'Paraná', uf: 'PR', link: './src/svg/parana.svg' },
                    { estado: 'Pernambuco', uf: 'PE', link: './src/svg/pernambuco.svg' },
                    { estado: 'Piauí', uf: 'PI', link: './src/svg/piaui.svg' },
                    { estado: 'Rio de Janeiro', uf: 'RJ', link: './src/svg/rio-de-janeiro.svg' },
                    { estado: 'Rio Grande do Norte', uf: 'RN', link: './src/svg/rio-grande-do-norte.svg' },
                    { estado: 'Rio Grande do Sul', uf: 'RS', link: './src/svg/rio-grande-do-sul.svg' },
                    { estado: 'Rondônia', uf: 'RO', link: './src/svg/rondonia.svg' },
                    { estado: 'Roraima', uf: 'RR', link: './src/svg/roraima.svg' },
                    { estado: 'Santa Catarina', uf: 'SC', link: './src/svg/santa-catarina.svg' },
                    { estado: 'São Paulo', uf: 'SP', link: './src/svg/sao-paulo.svg' },
                    { estado: 'Sergipe', uf: 'SE', link: './src/svg/sergipe.svg' },
                    { estado: 'Tocantins', uf: 'TO', link: './src/svg/tocantins.svg' }
        ];
            for (let i = 0; i < statesArray.length; i++) {
                const estadodaimg = statesArray[i];

                if (estadodaimg.uf === estado) {
                    flag = estadodaimg.link
                    
                    $('#bandeira').attr('src', flag);         
                    break;      
                        
                }
            }
            
    })

    $('#cep').blur(function() {
        const cepNumber = $(this).val().replace("-","");

        axios.get(`https://brasilapi.com.br/api/cep/v1/${cepNumber}`)
        .then(response => {
                        
            const data = response.data;

                endereco = data.street;
                bairro = data.neighborhood;
                cidade = data.city;
                estado = data.state;
                cepnro = data.cep;

                $('#address').val(endereco);
                $('#bairro').val(bairro);
                $('#cidade').val(cidade);
                $('#uf').val(estado);

                
            })
                    
        .catch(error => {
        console.log('Erro na solicitação do CEP:', error);
        alert('CEP não encontrado ou erro na solicitação.');
        });
    });

    $(document).on('click', '#deleteInfo', function() {
        $(this).closest('tr').remove();
    })    

    $(document).on('click', '#showInfo',(function () {
    
        const infoTr = $(this).siblings('.fullInfo')
        $(infoTr).toggleClass("show");

            
        $(document).on('click', '#close', function () {
        infoTr.removeClass("show");
        });
    }));


    
})

















