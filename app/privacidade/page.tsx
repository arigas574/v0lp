import Image from "next/image"
import { Footer } from "@/components/calendro/footer"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Simplificada */}
      <header className="w-full bg-background border-b border-border">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-center px-6 md:px-8">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Calendro"
              width={400}
              height={400}
              style={{ height: '100px', width: 'auto' }}
              className="object-contain cursor-default"
              priority
            />
          </a>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-foreground md:text-4xl mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <p className="text-muted-foreground">
                Para receber informações sobre os seus dados pessoais, os propósitos e as partes de informação que são compartilhadas, entre em contato com o Proprietário.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Proprietário e Controlador de Dados</h2>
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Tipos de Dados coletados</h2>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Uso de Dados e outros dados coletados</h2>
              <p className="text-muted-foreground mb-4">
                Detalhes completos sobre cada tipo de Dados Pessoais coletados são fornecidos nas seções dedicadas desta política de privacidade ou por textos explicativos específicos exibidos antes da coleta de Dados.
              </p>
              <p className="text-muted-foreground mb-4">
                Os Dados Pessoais poderão ser fornecidos livremente pelo Usuário, ou, no caso dos Dados de Utilização, coletados automaticamente ao se utilizar este Aplicativo.
              </p>
              <p className="text-muted-foreground mb-4">
                A menos que especificado diferentemente todos os Dados solicitados por este Aplicativo são obrigatórios e a falta de fornecimento destes Dados poderá impossibilitar este Aplicativo de fornecer os seus Serviços. Nos casos em que este Aplicativo afirmar especificamente que alguns Dados não forem obrigatórios, os Usuários ficam livres para deixarem de comunicar estes Dados sem nenhuma consequência para a disponibilidade ou o funcionamento do Serviço.
              </p>
              <p className="text-muted-foreground mb-4">
                Os Usuários que tiverem dúvidas a respeito de quais Dados Pessoais são obrigatórios estão convidados a entrar em contato com o Proprietário.
              </p>
              <p className="text-muted-foreground mb-4">
                Quaisquer usos de cookies – ou de outras ferramentas de rastreamento – por este Aplicativo ou pelos proprietários de serviços terceiros utilizados por este Aplicativo serão para a finalidade de fornecer os Serviços solicitados pelo Usuário, além das demais finalidades descritas no presente documento e na Política de Cookies, se estiver disponível.
              </p>
              <p className="text-muted-foreground">
                Os Usuários ficam responsáveis por quaisquer Dados Pessoais de terceiros que forem obtidos, publicados ou compartilhados através deste Serviço (este Aplicativo) e confirmam que possuem a autorização dos terceiros para fornecerem os Dados para o Proprietário.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Modo e local de processamento dos Dados</h2>

              <h3 className="font-semibold text-foreground mb-3">Método de processamento</h3>
              <p className="text-muted-foreground mb-4">
                O Proprietário tomará as medidas de segurança adequadas para impedir o acesso não autorizado, divulgação, alteração ou destruição não autorizada dos Dados.
              </p>
              <p className="text-muted-foreground mb-4">
                O processamento dos Dados é realizado utilizando computadores e /ou ferramentas de TI habilitadas, seguindo procedimentos organizacionais e meios estritamente relacionados com os fins indicados. Além do Proprietário, em alguns casos, os Dados podem ser acessados por certos tipos de pessoas encarregadas, envolvidas com a operação deste Serviço (este Aplicativo) (administração, vendas, marketing, administração legal do sistema) ou pessoas externas (como fornecedores terceirizados de serviços técnicos, carteiros, provedores de hospedagem, empresas de TI, agências de comunicação) nomeadas, quando necessário, como Processadores de Dados por parte do Proprietário. A lista atualizada destas partes pode ser solicitada ao Proprietário a qualquer momento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Base jurídica para o processamento</h3>
              <p className="text-muted-foreground mb-4">
                O Proprietário poderá processar os Dados Pessoais relacionados ao Usuário se uma das hipóteses a seguir se aplicar:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>os Usuários tenham dado a sua anuência para uma ou mais finalidades específicas; Observação: De acordo com algumas legislações o Proprietário poderá ter a permissão para processar os Dados Pessoais ATÉ QUE O Usuário faça objeção a isto ("opt-out"), sem ter que se basear em anuência ou em quaisquer outras bases jurídicas a seguir. Isto contudo não se aplica sempre que o processamento de Dados Pessoais estiver sujeito à legislação europeia de proteção de dados;</li>
                <li>o fornecimento dos Dados for necessário para o cumprimento de um contrato com o Usuário e/ou quaisquer obrigações pré-contratuais do mesmo;</li>
                <li>o processamento for necessário para o cumprimento de uma obrigação jurídica à qual o Proprietário estiver sujeito;</li>
                <li>o processamento estiver relacionado a uma tarefa que for executada no interesse público ou no exercício de uma autorização oficial na qual o Proprietário estiver investido;</li>
                <li>o processamento for necessário para a finalidade de interesses legítimos perseguidos pelo Proprietário ou por um terceiro;</li>
              </ul>
              <p className="text-muted-foreground">
                Em qualquer caso, o Proprietário colaborará de bom grado para esclarecer qual a base jurídica que se aplica ao processamento, e em especial se o fornecimento de Dados for um requisito obrigatório por força de lei ou contratual, ou uma exigência necessária para celebrar um contrato.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">Lugar</h3>
              <p className="text-muted-foreground mb-4">
                Os dados são processados ​​nas sedes de operação dos Proprietários, e em quaisquer outros lugares onde as partes envolvidas com o processamento estiverem localizadas.
              </p>
              <p className="text-muted-foreground mb-4">
                Dependendo da localização do Usuário as transferências de dados poderão envolver a transferência dos Dados do Usuário para outro país que não seja o seu. Para descobrirem mais sobre o local de processamento de tais Dados transferidos os Usuários poderão verificar a seção contendo os detalhes sobre o processamento de Dados Pessoais.
              </p>
              <p className="text-muted-foreground mb-4">
                Os Usuários também possuem o direito de serem informados sobre a base jurídica das transferências de Dados para países de fora da União Europeia ou para quaisquer organizações internacionais regidas pelo direito internacional público ou formadas por dois ou mais países, tal como a ONU, e sobre as medidas de segurança tomadas pelo Proprietário para proteger os seus Dados.
              </p>
              <p className="text-muted-foreground">
                Se ocorrerem quaisquer tais transferências os Usuários poderão descobrir mais a respeito verificando as seções pertinentes deste documento ou perguntando ao Proprietário utilizando as informações fornecidas na seção de contatos.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">Período de conservação</h3>
              <p className="text-muted-foreground mb-4">
                Os Dados Pessoais serão processados e armazenados pelo tempo que for necessário para as finalidades para as quais forem coletados.
              </p>
              <p className="text-muted-foreground mb-4">Portanto:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Os Dados Pessoais coletados para as finalidades relacionadas com a execução de um contrato entre o Proprietário e o Usuário serão conservados até que tal contrato tenha sido completamente cumprido.</li>
                <li>Os Dados Pessoais coletados para as finalidades relacionadas com os legítimos interesses do Proprietário serão conservados pelo tempo que for necessário para cumprir tais finalidades. Os Usuários poderão obter informações específicas sobre os interesses legítimos perseguidos pelo Proprietário dentro das seções pertinentes deste documento ou entrando em contato com o Proprietário.</li>
                <li>O Proprietário poderá ter a permissão de conservar os Dados Pessoais por um prazo maior sempre que o Usuário tiver dado a sua autorização para tal processamento, enquanto tal autorização não tiver sido retirada. Além disso, o Proprietário poderá ficar obrigado a conservar os Dados Pessoais por um prazo maior em todas as ocasiões em que estiver obrigado a fazê-lo para o cumprimento de uma obrigação jurídica ou em cumprimento de um mandado de uma autoridade.</li>
              </ul>
              <p className="text-muted-foreground">
                Assim que o prazo de conservação vencer os Dados Pessoais serão apagados. Desta forma o direito de acessar, o direito de apagar, o direito de corrigir e o direito à portabilidade dos dados não poderão ter o seu cumprimento exigido após o vencimento do prazo de conservação.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Os direitos dos Usuários</h2>
              <p className="text-muted-foreground mb-4">
                Os Usuários poderão exercer determinados direitos a respeito dos seus Dados processados pelo Proprietário.
              </p>
              <p className="text-muted-foreground mb-4">
                Em particular, os Usuários possuem os direitos a fazer o seguinte:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Retirar a sua anuência a qualquer momento. Os Usuários possuem o direito de retirar a sua anuência nos casos em que tenham dado a sua anuência anteriormente para o processamento dos seus Dados Pessoais.</li>
                <li>Objetar o processamento dos seus Dados. Os Usuários possuem o direito de objetar o processamento dos seus Dados se o processamento for executado sobre outra base jurídica que não a anuência. São fornecidos detalhes adicionais na seção específica abaixo.</li>
                <li>Acessar os seus Dados. Os Usuários possuem o direito de saber se os seus Dados estão sendo tratados pelo Proprietário, obter revelações sobre determinados aspectos do tratamento e conseguir uma cópia dos Dados que estiverem sendo tratados.</li>
                <li>Verificar e pedir retificação. Os Usuários possuem o direito de verificar a exatidão dos seus Dados e de pedir que os mesmos sejam atualizados ou corrigidos.</li>
                <li>Restringir o processamento dos seus Dados. Os Usuários possuem o direito de, sob determinadas circunstâncias, restringir o processamento dos seus Dados para qualquer outra finalidade que não seja o armazenamento dos mesmos.</li>
                <li>Ter os seus Dados Pessoais apagados ou retirados de outra maneira. Os Usuários possuem o direito de, sob determinadas circunstâncias, obter a eliminação dos Dados do Proprietário.</li>
                <li>Receber os seus Dados e ter os mesmos transferidos para outro controlador. Os Usuários possuem o direito de receber os seus Dados em um formato estruturado, utilizado comumente e apto a ser lido por máquinas e, se for viável tecnicamente, fazer com que os mesmos sejam transmitidos para outro controlador sem nenhum empecilho. Esta determinação se aplica condicionada a que os Dados sejam processados por meios automatizados e que o processamento esteja baseado na anuência do Usuário, em um contrato do qual o Usuário seja uma das partes ou por obrigações pré-contratuais do mesmo.</li>
                <li>Registrar uma reclamação. Os Usuários possuem o direito de apresentar reclamação perante a sua autoridade de proteção de dados competente.</li>
              </ul>

              <h3 className="font-semibold text-foreground mb-3">Detalhes sobre o direito de objetar ao processamento</h3>
              <p className="text-muted-foreground mb-4">
                Nos casos em que os Dados Pessoais forem processados por um interesse público, no exercício de uma autorização oficial na qual o Proprietário estiver investido ou para finalidades dos interesses legítimos perseguidos pelo Proprietário, os Usuários poderão objetar tal processamento através do fornecimento de um motivo relacionado com a sua situação em especial para justificar a objeção.
              </p>
              <p className="text-muted-foreground mb-4">
                Os Usuários devem saber, entretanto, que caso os seus Dados Pessoais sejam processados para finalidades de marketing direto eles podem objetar tal processamento a qualquer momento sem fornecer nenhuma justificativa. Os Usuários podem consultar as seções respectivas deste documento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Como exercer estes direitos</h3>
              <p className="text-muted-foreground">
                Quaisquer pedidos para exercer os direitos dos Usuários podem ser direcionados ao Proprietário através dos dados para contato fornecidos neste documento. Estes pedidos podem ser exercidos sem nenhum custo e serão atendidos pelo Proprietário com a maior brevidade possível e em todos os casos em prazo inferior a um mês.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Informações adicionais sobre a coleta e processamento de Dados</h2>

              <h3 className="font-semibold text-foreground mb-3">Ação jurídica</h3>
              <p className="text-muted-foreground mb-4">
                Os Dados Pessoais dos Usuários podem ser utilizados para fins jurídicos pelo Proprietário em juízo ou nas etapas conducentes à possível ação jurídica decorrente de uso indevido deste Serviço (este Aplicativo) ou dos Serviços relacionados.
              </p>
              <p className="text-muted-foreground mb-4">
                O Usuário declara estar ciente de que o Proprietário poderá ser obrigado a revelar os Dados Pessoais mediante solicitação das autoridades governamentais.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Informações adicionais sobre os Dados Pessoais do Usuário</h3>
              <p className="text-muted-foreground mb-4">
                Além das informações contidas nesta política de privacidade, este Aplicativo poderá fornecer ao Usuário informações adicionais e contextuais sobre os serviços específicos ou a coleta e processamento de Dados Pessoais mediante solicitação.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Logs do sistema e manutenção</h3>
              <p className="text-muted-foreground mb-4">
                Para fins de operação e manutenção, este Aplicativo e quaisquer serviços de terceiros poderão coletar arquivos que gravam a interação com este Aplicativo (logs do sistema) ou usar outros Dados Pessoais (tais como endereço IP) para esta finalidade.
              </p>

              <h3 className="font-semibold text-foreground mb-3">As informações não contidas nesta política</h3>
              <p className="text-muted-foreground mb-4">
                Mais detalhes sobre a coleta ou processamento de Dados Pessoais podem ser solicitados ao Proprietário, a qualquer momento. Favor ver as informações de contato no início deste documento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Como são tratados os pedidos de "Não me Rastreie"</h3>
              <p className="text-muted-foreground mb-4">
                Este Aplicativo não suporta pedidos de "Não Me Rastreie".
              </p>
              <p className="text-muted-foreground">
                Para determinar se qualquer um dos serviços de terceiros que utiliza honram solicitações de "Não Me Rastreie", por favor leia as políticas de privacidade.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Mudanças nesta política de privacidade</h3>
              <p className="text-muted-foreground">
                O Proprietário se reserva o direito de fazer alterações nesta política de privacidade a qualquer momento, através de notificação a seus Usuários nesta página e possivelmente dentro deste Serviço (este Aplicativo) e/ou – na medida em que for técnica e juridicamente viável – enviando um aviso para os Usuários através de quaisquer informações de contato disponíveis para o Proprietário. É altamente recomendável checar esta página regularmente, consultando a data da última modificação informada na parte inferior.
              </p>
              <p className="text-muted-foreground">
                Caso as mudanças afetem as atividades de processamento realizadas com base na anuência do Usuário, o Proprietário coletará nova anuência do Usuário, onde for exigida.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Informação para consumidores da Califórnia</h2>
              <p className="text-muted-foreground mb-4">
                Esta parte do documento se integra e complementa as informações contidas no resto desta política de privacidade e é fornecida pela empresa que opera este Site e, conforme for o caso, suas controladoras, subsidiárias e afiliadas (para fins desta seção, doravante denominadas em conjunto através dos pronomes "nós", "nos", "nosso" e "conosco").
              </p>
              <p className="text-muted-foreground mb-4">
                As disposições contidas nesta seção aplicar-se-ão a todos os Usuários que sejam consumidores residentes no estado da Califórnia, Estados Unidos da América, de acordo com a "Lei de Privacidade de Consumidores da Califórnia de 2018" (CCPA) (os Usuários serão doravante denominados através dos pronomes "você" e "seu") e, para tais consumidores, estas disposições substituem todas as outras disposições possivelmente divergentes ou conflitantes contidas nesta política de privacidade.
              </p>
              <p className="text-muted-foreground mb-4">
                Esta parte do documento usa o termo "informações pessoais", conforme definido na Lei de Privacidade do Consumidor da Califórnia (CCPA).
              </p>

              <h3 className="font-semibold text-foreground mb-3">Categorias de informações pessoais coletadas, divulgadas ou vendidas</h3>
              <p className="text-muted-foreground mb-4">
                Nesta seção, resumiremos as categorias de informações pessoais que coletamos, divulgamos ou vendemos e as respectivas finalidades. Você poderá ler sobre estas atividades com mais detalhes na seção intitulada "Informações detalhadas sobre o processamento de Dados Pessoais" neste documento.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Informações que nós coletamos: as categorias de informações pessoais que nós coletamos</h4>
              <p className="text-muted-foreground mb-4">
                Nós coletamos as seguintes categorias de informações pessoais sobre você: .
              </p>
              <p className="text-muted-foreground mb-4">
                Nós não coletaremos categorias adicionais de informações pessoais sem notificar a você.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como coletamos informações: quais são as fontes das informações pessoais que coletamos?</h4>
              <p className="text-muted-foreground mb-4">
                Nós coletamos as categorias acima mencionadas de informações pessoais, seja direta ou indiretamente, a partir do momento em que você usa este Aplicativo.
              </p>
              <p className="text-muted-foreground mb-4">
                Por exemplo, você fornece suas informações pessoais diretamente quando você envia solicitações através de quaisquer formulários neste serviço (este Aplicativo). Você também fornece informações pessoais indiretamente ao navegar neste serviço (este Aplicativo), pois as informações pessoais sobre você são automaticamente observadas e coletadas. Por fim, nós podemos coletar suas informações pessoais de terceiros que trabalhem conosco com o Serviço ou com o funcionamento deste serviço (este Aplicativo) e seus recursos.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como usamos as informações que coletamos: compartilhando e divulgando suas informações pessoais com terceiros para uma finalidade empresarial</h4>
              <p className="text-muted-foreground mb-4">
                Nós podemos revelar as informações que coletamos sobre você para terceiros para fins empresariais. Neste caso, nós celebramos um contrato por escrito com tais terceiros, exigindo que a parte recebedora mantenha as informações pessoais confidenciais e não as use para nenhuma finalidade além daquelas necessárias para a execução do contrato.
              </p>
              <p className="text-muted-foreground mb-4">
                Nós também podemos divulgar suas informações pessoais para terceiros quando você expressamente nos pedir ou autorizar a fazê-lo, a fim de prestar o Serviço a você.
              </p>
              <p className="text-muted-foreground mb-4">
                Para saber mais sobre as finalidades do processamento, consulte a respectiva seção deste documento.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Nenhuma venda de suas informações pessoais</h4>
              <p className="text-muted-foreground mb-4">
                Nos últimos 12 meses, nós não vendemos nenhuma de suas informações pessoais.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Quais são as finalidades para as quais nós usamos suas informações pessoais?</h4>
              <p className="text-muted-foreground mb-4">
                Nós podemos usar suas informações pessoais para permitir o funcionamento operacional deste serviço (este Aplicativo) e seus recursos ("fins empresariais"). Em tais casos, suas informações pessoais serão processadas de maneira necessária e proporcional aos fins empresariais para os quais elas foram coletadas e rigorosamente dentro dos limites dos fins operacionais compatíveis.
              </p>
              <p className="text-muted-foreground mb-4">
                Nós poderemos também usar suas informações pessoais para outras finalidades, como fins comerciais (conforme indicado na seção "Informações detalhadas sobre o processamento de Dados Pessoais" neste documento), e também para cumprir com a lei e defender nossos direitos perante as autoridades competentes, quando nossos direitos e interesses estiverem ameaçados ou sofremos danos reais.
              </p>
              <p className="text-muted-foreground">
                Nós não usaremos suas informações pessoais para finalidades diferentes, alheias ou incompatíveis sem notificar você.
              </p>

              <h3 className="font-semibold text-foreground mb-3 mt-6">Seus direitos de privacidade na Califórnia e como exercê-los</h3>

              <h4 className="font-semibold text-foreground mb-2">O direito ao conhecimento e à portabilidade</h4>
              <p className="text-muted-foreground mb-4">Você tem o direito de solicitar que revelemos a você:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>as categorias e fontes de informações pessoais que coletamos sobre você, as finalidades para as quais usamos suas informações pessoais e com quem tais informações são compartilhadas;</li>
                <li>no caso de venda de informações pessoais ou divulgação para uma finalidade empresarial, duas listas separadas onde divulgamos:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>para vendas, as categorias de informações pessoais adquiridas por cada categoria de parte recebedora; e</li>
                    <li>para divulgações para uma finalidade empresarial, as categorias de informações pessoais obtidas por cada categoria de parte recebedora.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-muted-foreground mb-4">
                A divulgação descrita acima será limitada às informações pessoais coletadas ou usadas no decorrer dos últimos 12 meses.
              </p>
              <p className="text-muted-foreground mb-4">
                Se fornecermos nossa resposta eletronicamente, as informações inclusas serão "portáveis", ou seja, fornecidas em um formato facilmente utilizado, a fim de permitir que você transmita as informações para outra entidade sem obstáculos – desde que seja tecnicamente viável.
              </p>

              <h4 className="font-semibold text-foreground mb-2">O direito de solicitar a exclusão de suas informações pessoais</h4>
              <p className="text-muted-foreground mb-4">
                Você tem o direito de solicitar que nós façamos a exclusão de suas informações pessoais, estando sujeito a exceções por força de lei (incluindo, entre outras, quando as informações são usadas para identificação e reparo de erros neste serviço (este Aplicativo), para identificação de incidentes de segurança e proteção contra atividades fraudulentas ou ilegais, para o exercício de determinados direitos, etc.).
              </p>
              <p className="text-muted-foreground mb-4">
                Se não houver nenhuma exceção legal em decorrência do exercício de seu direito, nós excluiremos suas informações pessoais e instruiremos todos os nossos prestadores de serviços a fazê-lo.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como exercer seus direitos</h4>
              <p className="text-muted-foreground mb-4">
                Para exercer os direitos descritos acima, você precisa nos enviar sua solicitação verificável, entrando em contato conosco através dos dados fornecidos neste documento.
              </p>
              <p className="text-muted-foreground mb-4">
                Para nós respondermos a sua solicitação, é necessário que saibamos quem você é. Assim sendo, você somente poderá exercer os direitos acima, fazendo uma solicitação verificável, que deverá:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>fornecer informações suficientes que nos permitam, dentro de limites razoáveis, verificar que você é a pessoa sobre quem nós coletamos informações ou um representante autorizado;</li>
                <li>descrever sua solicitação com detalhes suficientes, que nos permitam entender, avaliar e respondê-la adequadamente.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Nós não responderemos a nenhuma solicitação se não conseguirmos verificar sua identidade e assim confirmar se as informações pessoais em nossa posse realmente se relacionam a você.
              </p>
              <p className="text-muted-foreground mb-4">
                Se você não puder enviar pessoalmente uma solicitação verificável, você poderá autorizar uma pessoa cadastrada na Secretaria de Estado da Califórnia para agir em seu nome.
              </p>
              <p className="text-muted-foreground mb-4">
                Se você for adulto, você poderá fazer uma solicitação verificável em nome de um menor sob sua guarda.
              </p>
              <p className="text-muted-foreground">
                Você poderá enviar um máximo de 2 solicitações em um período de 12 meses.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como e quando esperamos atender a sua solicitação</h4>
              <p className="text-muted-foreground mb-4">
                Nós confirmaremos o recebimento de sua solicitação verificável no prazo de 10 dias e forneceremos informações sobre como processaremos sua solicitação.
              </p>
              <p className="text-muted-foreground mb-4">
                Nós responderemos a sua solicitação no prazo de 45 dias do recebimento. Se precisarmos de mais tempo, nós explicaremos a você os motivos e quanto tempo mais precisaremos. Para esta finalidade, observe que podemos demorar até 90 dias para atender a sua solicitação.
              </p>
              <p className="text-muted-foreground mb-4">
                Nossas cláusulas cobrirão o período de 12 meses precedente.
              </p>
              <p className="text-muted-foreground mb-4">
                Se negarmos sua solicitação, nós explicaremos os motivos de nossa negação.
              </p>
              <p className="text-muted-foreground">
                Nós não cobraremos uma taxa para processar ou responder a sua solicitação verificável, a menos que tal solicitação seja manifestamente infundada ou excessiva. Em tais casos, nós poderemos cobrar uma taxa razoável ou nos recusarmos a atender à solicitação. Em qualquer caso, nós comunicaremos nossas escolhas e explicaremos os motivos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-4">Informações para Usuários que residem no Brasil</h2>
              <p className="text-muted-foreground mb-4">
                Esta parte do documento se integra e complementa as informações contidas no resto desta política de privacidade e é fornecida pela entidade que opera este Aplicativo e, conforme for o caso, suas controladoras, subsidiárias e afiliadas (para fins desta seção, doravante denominadas em conjunto através dos pronomes "nós", "nos", "nosso" e "conosco").
              </p>
              <p className="text-muted-foreground mb-4">
                As disposições contidas nesta seção aplicar-se-ão a todos os Usuários que sejam residentes no Brasil, de acordo com a "Lei geral de Proteção de Dados" (os Usuários serão doravante denominados através dos pronomes "você" e "seu"). Para tais Usuários, estas disposições substituem todas as outras disposições possivelmente divergentes ou conflitantes contidas nesta política de privacidade.
              </p>
              <p className="text-muted-foreground mb-4">
                Esta parte do documento usa o termo "informações pessoais", conforme definido na Lei Geral de Proteção de Dados (LGPD).
              </p>

              <h3 className="font-semibold text-foreground mb-3">Em que nos embasamos para processar suas informações pessoais</h3>
              <p className="text-muted-foreground mb-4">
                Podemos processar suas informações pessoais somente se tivermos uma base legal para tal processamento. As bases legais são as seguintes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>sua anuência com as respectivas atividades de processamento;</li>
                <li>conformidade com uma obrigação legal ou regulamentar imposta a nós;</li>
                <li>o cumprimento de políticas públicas dispostas em leis ou regulamentações ou com base em contratos, acordos e instrumentos legais semelhantes;</li>
                <li>estudos conduzidos por entidades de pesquisa, preferivelmente realizados sobre informações pessoais anônimas;</li>
                <li>a execução de um contrato e seus procedimentos preliminares, nos casos em que você for parte do contrato;</li>
                <li>o exercício de nossos direitos em processos judiciais, administrativos ou de arbitragem;</li>
                <li>proteção ou segurança física de você ou de um terceiro;</li>
                <li>a proteção da saúde – em procedimentos realizados por entidades ou profissionais da saúde;</li>
                <li>nossos interesses legítimos, desde que seus direitos e liberdades fundamentais não prevaleçam sobre tais interesses; e</li>
                <li>proteção ao crédito.</li>
              </ul>
              <p className="text-muted-foreground">
                Para saber mais sobre as bases legais, você pode entrar em contato conosco a qualquer momento através dos dados de contato fornecidos neste documento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Categorias de informações pessoais processadas</h3>
              <p className="text-muted-foreground mb-4">
                Para saber que categorias de suas informações pessoais são processadas, você poderá ler a seção intitulada "Informações detalhadas sobre o processamento de Dados Pessoais" neste documento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Por que processamos suas informações pessoais</h3>
              <p className="text-muted-foreground mb-4">
                Para saber por que processamos suas informações pessoais, você poderá ler sobre as seções intituladas "Informações detalhadas sobre o processamento de Dados Pessoais" e "As finalidades do processamento" neste documento.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Seus direitos de privacidade como brasileiro, como enviar uma solicitação e nossas respostas a suas solicitações</h3>

              <h4 className="font-semibold text-foreground mb-2">Seus direitos de privacidade como brasileiro</h4>
              <p className="text-muted-foreground mb-4">Você tem o direito de:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>obter confirmação sobre a existência de atividades de tratamento de suas informações pessoais;</li>
                <li>acesso a suas informações pessoais;</li>
                <li>fazer com que suas informações pessoais incompletas, inexatas ou desatualizadas sejam corrigidas;</li>
                <li>obter o anonimato, bloqueio ou eliminação de suas informações pessoais desnecessárias ou em excesso, ou de informações que não estejam sendo processadas de acordo com a LGPD;</li>
                <li>obter informações sobre a possibilidade de fornecer ou recusar sua anuência e as respectivas consequências;</li>
                <li>obter informações sobre os terceiros com quem compartilhamos suas informações pessoais;</li>
                <li>obter, mediante sua solicitação expressa, a portabilidade de suas informações pessoais (exceto informações anônimas) para outro fornecedor de produtos ou serviços, desde que nossos segredos comerciais e industriais continuem protegidos;</li>
                <li>obter a exclusão de suas informações pessoais tratadas, se o tratamento teve base em sua anuência, a menos que se apliquem uma ou mais exceções daquelas dispostas no art. 16 da LGPD;</li>
                <li>retirar sua anuência a qualquer momento;</li>
                <li>registrar uma reclamação com relação a suas informações pessoais à ANPD (Autoridade Nacional de Proteção de Dados) ou aos órgãos de proteção ao consumidor;</li>
                <li>opor-se a uma atividade de tratamento nos casos em que o tratamento não for realizado em conformidade com as disposições da lei;</li>
                <li>solicitar informações claras e adequadas a respeito dos critérios e procedimentos usados para uma decisão automatizada; e</li>
                <li>solicitar a revisão de decisões tomadas exclusivamente com base no tratamento automatizado de suas informações pessoais, que afetem seus interesses. Nisto estão incluídas decisões para definir seu perfil pessoal, profissional, de consumidor e de crédito ou aspectos de sua personalidade.</li>
              </ul>
              <p className="text-muted-foreground">
                Você nunca será discriminado ou sofrerá qualquer tipo de prejuízo se exercer seus direitos.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como registrar sua solicitação</h4>
              <p className="text-muted-foreground mb-4">
                Você poderá registrar sua solicitação expressa de exercer seus direitos gratuitamente , em qualquer momento, usando os dados de contato fornecidos neste documento ou através de seu representante legal.
              </p>

              <h4 className="font-semibold text-foreground mb-2">Como e quando nós responderemos a sua solicitação</h4>
              <p className="text-muted-foreground mb-4">
                Faremos o possível para responder imediatamente a suas solicitações.
              </p>
              <p className="text-muted-foreground mb-4">
                Em qualquer caso, caso seja impossível, faremos questão de comunicar a você os motivos de fato ou de direito que nos impeçam de atender imediatamente, ou de qualquer outra forma, cumprir suas solicitações. Nos casos em que não estivermos processando suas informações pessoais, indicaremos a pessoa física ou jurídica a quem você deve encaminhar suas solicitações, se estivermos na posição de fazê-lo.
              </p>
              <p className="text-muted-foreground mb-4">
                Caso você registre uma solicitação de acesso ou de confirmação de processamento de informações pessoais, certifique-se de especificar se deseja que suas informações pessoais sejam entregues em formato eletrônico ou impresso.
              </p>
              <p className="text-muted-foreground mb-4">
                Você também precisará nos informar se deseja que respondemos sua solicitação imediatamente, sendo que neste caso responderemos de maneira simplificada ou se você precisa de uma resposta completa.
              </p>
              <p className="text-muted-foreground mb-4">
                Neste último caso, responderemos no prazo de 15 dias a contar do momento de sua solicitação, fornecendo todas as informações sobre a origem de suas informações pessoais, confirmação da existência ou não de registros, quaisquer critérios utilizados para o processamento e as finalidades do processamento, mantendo protegidos nossos segredos comerciais e industriais.
              </p>
              <p className="text-muted-foreground mb-4">
                Caso você solicite uma retificação, exclusão, anonimato ou bloqueio de informações pessoais, comunicaremos imediatamente sua solicitação a outras partes com quem compartilhamos suas informações pessoais, a fim de permitir que estes terceiros também cumpram sua solicitação – exceto nos casos em que tal comunicação se provar impossível ou envolver um esforço desproporcional de nosso lado.
              </p>

              <h3 className="font-semibold text-foreground mb-3">Transferência de informações pessoais para fora do Brasil permitida por lei</h3>
              <p className="text-muted-foreground mb-4">
                Temos permissão para transferir suas informações pessoais para fora do território brasileiro nos seguintes casos:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>quando a transferência for necessária para fins de cooperação jurídica internacional entre órgãos públicos de inteligência, investigação e Ministério Público, de acordo com os meios legais dispostos no direito internacional;</li>
                <li>quando a transferência for necessária para proteger sua vida ou segurança física ou de terceiros;</li>
                <li>quando a transferência for autorizada pela ANPD;</li>
                <li>quando a transferência decorrer de um compromisso assumido em um acordo de cooperação internacional;</li>
                <li>quando a transferência for necessária para a execução de uma política pública ou atribuição legal de serviço público;</li>
                <li>quando a transferência for necessária para o cumprimento de uma obrigação legal ou regulamentar, a execução de um contrato ou procedimentos preliminares relacionados a um contrato ou o exercício regular de direitos em processos judiciais, administrativos ou de arbitragem.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
