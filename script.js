        const diaSelect = document.getElementById('dia');
        for (let i = 1; i <= 31; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            diaSelect.appendChild(opt);
        }

        const anoSelect = document.getElementById('ano');
        const anoRefSelect = document.getElementById('ano-ref');
        const anoAtual = new Date().getFullYear();
        for (let i = anoAtual; i >= 1920; i--) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            anoSelect.appendChild(opt);
        }
        // Ano de referência: ano atual + próximos e alguns anteriores
        for (let i = anoAtual + 2; i >= anoAtual - 5; i--) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i + (i === anoAtual ? ' (atual)' : '');
            if (i === anoAtual) opt.selected = true;
            anoRefSelect.appendChild(opt);
        }

        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 90; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 2.2 + 0.6;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.setProperty('--d', (Math.random() * 4 + 2.5) + 's');
            star.style.setProperty('--o', Math.random() * 0.7 + 0.25);
            star.style.animationDelay = Math.random() * 6 + 's';
            starsContainer.appendChild(star);
        }

        const signos = [
            {
                nome: "Capricórnio",
                icone: "♑",
                datas: "22 de dezembro – 20 de janeiro",
                elemento: "Terra 🜃",
                planeta: "Saturno ♄",
                modalidade: "Cardinal",
                descricao: "Capricórnio é o signo da ambição estruturada, da disciplina e da conquista a longo prazo. Pessoas deste signo tendem a ser responsáveis, práticas e maduras desde cedo. Valorizam tradição, hierarquia, segurança e resultados concretos. Frequentemente assumem o papel de provedores ou líderes silenciosos. Quando equilibrado: perseverança, lealdade e capacidade de construir legados duradouros. Quando desequilibrado: rigidez, pessimismo, workaholismo e dificuldade em expressar emoções ou aproveitar o presente. Missão: subir a montanha com constância, sem esquecer de contemplar a vista e cuidar das relações pelo caminho.",
                fortes: ["Disciplina e perseverança", "Responsabilidade", "Ambição realista", "Lealdade", "Capacidade de planejamento"],
                fracos: ["Rigidez e teimosia", "Pessimismo", "Dificuldade em expressar emoções", "Workaholic", "Julgamento severo"],
                mito: "<strong>Mito principal:</strong> Associado a Aegipan (ou Pã) e à cabra Amalteia. Quando o monstro Tífon atacou o Olimpo, Pã transformou a parte inferior do corpo em peixe e a superior em bode para escapar pelo Nilo. Zeus o recompensou colocando-o no céu. Outra versão liga o signo à cabra Amalteia, que amamentou Zeus criança — seu chifre se tornou a Cornucópia (chifre da abundância).",
                compat: ["Touro", "Virgem", "Escorpião", "Peixes"],
                horoscopo: {
                    geral: "Hoje a disciplina de Saturno pede foco no essencial. Evite dispersar energia em tarefas secundárias. Um passo sólido vale mais que dez corridas sem direção. Confie no processo longo.",
                    amor: "Momento de conversas honestas. Mostre compromisso através de ações concretas, não apenas palavras.",
                    trabalho: "Ótimo dia para organizar projetos e definir prazos realistas. Sua seriedade será notada.",
                    dinheiro: "Evite gastos impulsivos. Prefira investir em algo que traga retorno a médio prazo.",
                    saude: "Cuide da coluna e das articulações. Alongamentos e pausas no trabalho fazem diferença."
                }
            },
            {
                nome: "Aquário",
                icone: "♒",
                datas: "21 de janeiro – 19 de fevereiro",
                elemento: "Ar 🜁",
                planeta: "Urano ♅ / Saturno ♄",
                modalidade: "Fixo",
                descricao: "Aquário é o signo da originalidade, da visão de futuro e da liberdade intelectual. Pessoas aquarianas costumam ser independentes, inovadoras e genuinamente ligadas a causas coletivas. Pensam diferente, questionam normas e valorizam amizade e humanidade acima de possessividade. Quando equilibrado: visão humanitária, criatividade e capacidade de unir pessoas em torno de ideias. Quando desequilibrado: distanciamento emocional, rebeldia por rebeldia, teimosia ideológica e dificuldade com intimidade. Missão: trazer o futuro para o presente sem perder a conexão humana e o calor das relações pessoais.",
                fortes: ["Originalidade e criatividade", "Visão humanitária", "Independência", "Intelectualidade", "Lealdade aos ideais"],
                fracos: ["Distanciamento emocional", "Rebelião por rebelião", "Teimosia ideológica", "Impessoalidade", "Dificuldade com intimidade"],
                mito: "<strong>Mito principal:</strong> Ganimedes, belo príncipe troiano. Zeus, apaixonado por sua beleza, enviou uma águia (ou se transformou nela) e o raptou para o Olimpo. Lá, Ganimedes se tornou o copeiro dos deuses, derramando o néctar eterno. A constelação de Aquário representa esse jovem derramando a ânfora — símbolo da água da vida e do conhecimento oferecido à humanidade.",
                compat: ["Gêmeos", "Libra", "Sagitário", "Áries"],
                horoscopo: {
                    geral: "Ideias inovadoras surgem com força hoje. Não tenha medo de propor algo diferente. Sua originalidade é o maior trunfo. Conecte-se com grupos ou causas que inspirem.",
                    amor: "Valorize a amizade dentro do relacionamento. Liberdade e respeito mútuo são essenciais agora.",
                    trabalho: "Bom momento para brainstorm e projetos coletivos. Sua visão de futuro pode abrir portas.",
                    dinheiro: "Evite apostas arriscadas. Prefira soluções criativas e colaborativas para questões financeiras.",
                    saude: "Cuide da circulação e do sistema nervoso. Atividades em grupo ou ao ar livre renovam as energias."
                }
            },
            {
                nome: "Peixes",
                icone: "♓",
                datas: "20 de fevereiro – 20 de março",
                elemento: "Água 🜄",
                planeta: "Netuno ♆ / Júpiter ♃",
                modalidade: "Mutável",
                descricao: "Peixes é o signo da sensibilidade profunda, da intuição e da conexão com o invisível. Pessoas deste signo são empáticas, imaginativas e frequentemente artísticas ou espirituais. Absorvem com facilidade as emoções do ambiente. Quando equilibrado: compaixão, criatividade e capacidade de curar e inspirar. Quando desequilibrado: escapismo, indecisão, vitimismo, falta de limites e idealização excessiva. Missão: manter os pés no chão sem perder a magia — servir e criar a partir da sensibilidade, sem se dissolver no outro.",
                fortes: ["Empatia e compaixão", "Intuição aguçada", "Criatividade", "Adaptabilidade", "Generosidade"],
                fracos: ["Escapismo", "Indecisão", "Vitimismo", "Falta de limites", "Idealização excessiva"],
                mito: "<strong>Mito principal:</strong> Quando o monstro Tífon atacou o Olimpo, Afrodite e seu filho Eros (Vênus e Cupido) se transformaram em peixes e se amarraram com um cordão para não se perderem nas águas do Eufrates. Os peixes foram depois colocados no céu em sua homenagem. O cordão que une os dois peixes simboliza a ligação entre o mundo material e o espiritual.",
                compat: ["Câncer", "Escorpião", "Touro", "Capricórnio"],
                horoscopo: {
                    geral: "A intuição está especialmente aguçada. Confie nos sinais sutis e nas sensações. Reserve um tempo para o silêncio e a imaginação — ideias criativas florescem nesse clima.",
                    amor: "Romance e conexão emocional em alta. Expressar carinho de forma sensível fortalece os laços.",
                    trabalho: "Ambientes criativos ou de ajuda ao próximo favorecem. Evite sobrecarregar-se com problemas alheios.",
                    dinheiro: "Cuidado com generosidade excessiva. Ajude, mas sem se prejudicar financeiramente.",
                    saude: "Descanse a mente. Meditação, música ou banho relaxante ajudam a limpar energias acumuladas."
                }
            },
            {
                nome: "Áries",
                icone: "♈",
                datas: "21 de março – 20 de abril",
                elemento: "Fogo 🜂",
                planeta: "Marte ♂",
                modalidade: "Cardinal",
                descricao: "Áries é o signo do pioneiro, da coragem impulsiva e da energia que inicia ciclos. Pessoas de Áries tendem a ser diretas, competitivas e cheias de vitalidade. Preferem agir a esperar e se sentem vivas diante de desafios. Quando equilibrado: liderança natural, honestidade, coragem e capacidade de motivar os outros. Quando desequilibrado: impulsividade, impaciência, agressividade, egocentrismo e dificuldade em terminar o que começa. Missão: acender a chama e abrir caminhos sem queimar quem está ao lado — liderar com coragem e consciência.",
                fortes: ["Coragem e iniciativa", "Honestidade direta", "Energia e entusiasmo", "Liderança natural", "Resiliência"],
                fracos: ["Impulsividade", "Impaciência", "Agressividade", "Egocentrismo", "Dificuldade em terminar o que começa"],
                mito: "<strong>Mito principal:</strong> O Carneiro do Velocino de Ouro. O rei Atamante ia sacrificar seus filhos Frixo e Hele. Hermes enviou um carneiro voador de lã dourada que os salvou. Hele caiu no mar (Helesponto), mas Frixo chegou à Cólquida, sacrificou o animal e ofereceu o Velocino de Ouro ao rei Eetes. Mais tarde, Jasão e os Argonautas partiram em busca desse tesouro lendário.",
                compat: ["Leão", "Sagitário", "Gêmeos", "Aquário"],
                horoscopo: {
                    geral: "A energia de Marte está a seu favor. É dia de iniciar, de dar o primeiro passo e de não esperar permissão. Canalize a impulsividade para ações construtivas.",
                    amor: "Paixão e espontaneidade marcam o dia. Seja direto, mas evite discussões desnecessárias.",
                    trabalho: "Ótimo momento para liderar e propor ideias novas. Sua iniciativa será reconhecida.",
                    dinheiro: "Evite decisões financeiras no impulso. Pense duas vezes antes de gastar ou investir.",
                    saude: "Canalize a energia com exercício físico. Cuidado com irritabilidade e excessos."
                }
            },
            {
                nome: "Touro",
                icone: "♉",
                datas: "21 de abril – 20 de maio",
                elemento: "Terra 🜃",
                planeta: "Vênus ♀",
                modalidade: "Fixo",
                descricao: "Touro é o signo da estabilidade, dos prazeres sensoriais e da lealdade duradoura. Pessoas taurinas valorizam segurança, conforto, beleza e o que é concreto e confiável. São pacientes, persistentes e extremamente fiéis. Quando equilibrado: estabilidade, sensualidade saudável, perseverança e apreciação da vida. Quando desequilibrado: teimosia, possessividade, resistência excessiva à mudança, preguiça ou materialismo. Missão: construir segurança e prazer sem se prender ao que já não serve — firmeza com flexibilidade.",
                fortes: ["Lealdade e estabilidade", "Paciência", "Apreciação da beleza", "Praticidade", "Persistência"],
                fracos: ["Teimosia", "Possessividade", "Resistência à mudança", "Preguiça ocasional", "Materialismo"],
                mito: "<strong>Mito principal:</strong> Zeus e Europa. Zeus se apaixonou pela princesa fenícia Europa e se transformou em um belo touro branco para conquistá-la. Europa montou nele e foi levada através do mar até Creta. Lá, Zeus revelou sua identidade e juntos tiveram filhos, entre eles Minos, futuro rei de Creta. O touro representa força, sensualidade e o poder de atração.",
                compat: ["Virgem", "Capricórnio", "Câncer", "Peixes"],
                horoscopo: {
                    geral: "Vênus favorece o prazer simples e a estabilidade. Aproveite o que já tem e cultive a paciência. Mudanças abruptas não são necessárias hoje.",
                    amor: "Momento de carinho e sensualidade. Pequenos gestos de afeto valem mais que grandes discursos.",
                    trabalho: "Foque em concluir o que já está em andamento. Persistência traz resultados concretos.",
                    dinheiro: "Bom dia para consolidar finanças e evitar desperdícios. Segurança em primeiro lugar.",
                    saude: "Cuide da garganta e do pescoço. Alimentação equilibrada e descanso fazem bem."
                }
            },
            {
                nome: "Gêmeos",
                icone: "♊",
                datas: "21 de maio – 20 de junho",
                elemento: "Ar 🜁",
                planeta: "Mercúrio ☿",
                modalidade: "Mutável",
                descricao: "Gêmeos é o signo da curiosidade, da comunicação e da dualidade. Pessoas geminianas são versáteis, inteligentes e socialmente ágeis. Adoram ideias novas, conversas e movimento mental. Quando equilibrado: brilho comunicativo, adaptabilidade, humor e capacidade de conectar mundos diferentes. Quando desequilibrado: inconstância, superficialidade, ansiedade mental e dificuldade de compromisso profundo. Missão: usar a mente rápida e a palavra para unir e esclarecer, sem se perder na dispersão — profundidade dentro da versatilidade.",
                fortes: ["Comunicação brilhante", "Curiosidade intelectual", "Adaptabilidade", "Humor e leveza", "Versatilidade"],
                fracos: ["Inconstância", "Superficialidade", "Ansiedade mental", "Dificuldade de compromisso", "Fofoca ou conversa demais"],
                mito: "<strong>Mito principal:</strong> Cástor e Pólux (os Dióscuros). Filhos de Leda: Pólux era filho de Zeus (imortal) e Cástor era mortal. Quando Cástor morreu, Pólux pediu a Zeus que pudesse compartilhar sua imortalidade com o irmão. Zeus permitiu que os dois alternassem entre o Olimpo e o mundo dos mortos, e os colocou no céu como a constelação de Gêmeos — símbolo eterno da dualidade e da irmandade.",
                compat: ["Libra", "Aquário", "Áries", "Leão"],
                horoscopo: {
                    geral: "Mercúrio ativa a mente e as conexões. Converse, aprenda e troque ideias. Evite dispersar-se em demasiados assuntos ao mesmo tempo.",
                    amor: "Comunicação é a chave. Converse com leveza e humor. Evite mal-entendidos por falta de clareza.",
                    trabalho: "Dia produtivo para reuniões, escritos e networking. Sua versatilidade é um trunfo.",
                    dinheiro: "Boas oportunidades de informação financeira. Pesquise antes de decidir.",
                    saude: "Cuide do sistema nervoso e das vias respiratórias. Pause a mente periodicamente."
                }
            },
            {
                nome: "Câncer",
                icone: "♋",
                datas: "21 de junho – 22 de julho",
                elemento: "Água 🜄",
                planeta: "Lua ☽",
                modalidade: "Cardinal",
                descricao: "Câncer é o signo da proteção emocional, do cuidado e da memória afetiva. Pessoas cancerianas são profundamente ligadas à família, ao lar e às raízes. Possuem intuição emocional forte e necessidade natural de nutrir e serem nutridas. Quando equilibrado: empatia, lealdade, acolhimento e capacidade de criar lares emocionais seguros. Quando desequilibrado: mudanças de humor, possessividade, mágoas guardadas, medo de rejeição e dependência emocional. Missão: cuidar com o coração aberto sem se prender ao passado — proteção que liberta, não que aprisiona.",
                fortes: ["Empatia profunda", "Lealdade familiar", "Intuição emocional", "Proteção e cuidado", "Memória afetiva"],
                fracos: ["Mudanças de humor", "Possessividade emocional", "Tendência a guardar mágoas", "Medo de rejeição", "Dependência emocional"],
                mito: "<strong>Mito principal:</strong> O caranguejo de Hera. Durante o combate de Hércules contra a Hidra de Lerna, a deusa Hera (que odiava o herói) enviou um enorme caranguejo para atrapalhá-lo. O caranguejo mordeu o pé de Hércules, que o esmagou. Hera, em reconhecimento ao esforço da criatura, a colocou no céu como a constelação de Câncer — símbolo de proteção e tenacidade mesmo em causas difíceis.",
                compat: ["Escorpião", "Peixes", "Touro", "Virgem"],
                horoscopo: {
                    geral: "A Lua favorece o acolhimento e a intuição. Cuide de quem ama e permita-se ser cuidado. O lar e as emoções pedem atenção especial.",
                    amor: "Clima afetivo e protetor. Demonstre carinho de forma prática e acolhedora.",
                    trabalho: "Ambientes familiares ou de cuidado favorecem. Evite levar problemas pessoais para o trabalho.",
                    dinheiro: "Priorize a segurança do lar e das necessidades básicas. Evite gastos emocionais.",
                    saude: "Cuide do estômago e das emoções. Alimentação leve e momentos de descanso ajudam."
                }
            },
            {
                nome: "Leão",
                icone: "♌",
                datas: "23 de julho – 22 de agosto",
                elemento: "Fogo 🜂",
                planeta: "Sol ☉",
                modalidade: "Fixo",
                descricao: "Leão é o signo da generosidade, da criatividade e do brilho natural. Pessoas leoninas gostam de ser vistas, admiradas e de espalhar calor. São leais, orgulhosas e de coração grande. Quando equilibrado: carisma, generosidade, criatividade e capacidade de inspirar. Quando desequilibrado: orgulho excessivo, necessidade constante de atenção, dramatização e dificuldade em aceitar críticas. Missão: brilhar sem apagar os outros — liderar e criar a partir do coração, dividindo o palco com elegância.",
                fortes: ["Generosidade", "Criatividade e carisma", "Lealdade", "Confiança", "Coração generoso"],
                fracos: ["Orgulho excessivo", "Necessidade de atenção", "Dramatização", "Teimosia", "Dificuldade em aceitar críticas"],
                mito: "<strong>Mito principal:</strong> O Leão de Nemeia. O primeiro trabalho de Hércules foi matar o Leão de Nemeia, uma fera invulnerável a qualquer arma. Hércules o estrangulou com as próprias mãos e depois usou a pele do leão como armadura. A constelação de Leão imortaliza essa criatura — símbolo de força bruta, coragem e do poder que se conquista enfrentando o medo de frente.",
                compat: ["Áries", "Sagitário", "Gêmeos", "Libra"],
                horoscopo: {
                    geral: "O Sol ilumina sua criatividade e generosidade. Brilhe, mas compartilhe o palco. Reconhecimento vem quando você age com o coração.",
                    amor: "Romance e demonstrações de afeto em alta. Seja generoso e evite dramas desnecessários.",
                    trabalho: "Bom dia para liderar com carisma e inspirar a equipe. Sua presença faz diferença.",
                    dinheiro: "Evite gastos para impressionar. Prefira investimentos que tragam prazer genuíno.",
                    saude: "Cuide do coração e da energia vital. Atividades criativas e ao sol revitalizam."
                }
            },
            {
                nome: "Virgem",
                icone: "♍",
                datas: "23 de agosto – 22 de setembro",
                elemento: "Terra 🜃",
                planeta: "Mercúrio ☿",
                modalidade: "Mutável",
                descricao: "Virgem é o signo da análise, do serviço e da busca pela excelência. Pessoas virginianas são práticas, observadoras e extremamente competentes. Notam o que ninguém vê e têm necessidade genuína de ser úteis. Quando equilibrado: organização, inteligência prática, prestatividade e melhoria contínua. Quando desequilibrado: perfeccionismo paralisante, crítica excessiva, ansiedade e autocrítica severa. Missão: servir e aperfeiçoar com amor — aceitar a imperfeição sem abandonar a qualidade.",
                fortes: ["Atenção aos detalhes", "Praticidade", "Inteligência analítica", "Prestatividade", "Organização"],
                fracos: ["Perfeccionismo excessivo", "Crítica excessiva", "Ansiedade", "Dificuldade em relaxar", "Autocrítica severa"],
                mito: "<strong>Mito principal:</strong> Astréia, deusa da justiça e da pureza. Foi a última dos imortais a abandonar a Terra durante a Idade do Ferro, quando a humanidade se corrompeu. Subiu aos céus e se tornou a constelação de Virgem. Outra associação forte é com Deméter (deusa da colheita) e sua filha Perséfone — mito que explica o ciclo das estações e a dualidade entre pureza e fertilidade.",
                compat: ["Touro", "Capricórnio", "Câncer", "Escorpião"],
                horoscopo: {
                    geral: "Mercúrio favorece a organização e o serviço. Foque nos detalhes que realmente importam e evite a autocrítica excessiva. Progresso vem da constância.",
                    amor: "Demonstre afeto através de gestos práticos. Cuide do outro sem tentar 'consertar' tudo.",
                    trabalho: "Excelente dia para análise, planejamento e melhoria de processos. Sua competência brilha.",
                    dinheiro: "Revise contas e evite desperdícios. Pequenas economias fazem diferença.",
                    saude: "Cuide do sistema digestivo e da rotina. Organização do dia a dia reduz a ansiedade."
                }
            },
            {
                nome: "Libra",
                icone: "♎",
                datas: "23 de setembro – 22 de outubro",
                elemento: "Ar 🜁",
                planeta: "Vênus ♀",
                modalidade: "Cardinal",
                descricao: "Libra é o signo da harmonia, da diplomacia e da busca pelo equilíbrio. Pessoas libranas valorizam beleza, relacionamentos e justiça. Têm talento para mediar conflitos e criar ambientes agradáveis. Quando equilibrado: charme, senso de justiça, sociabilidade e capacidade de unir opostos. Quando desequilibrado: indecisão, fuga de confrontos, dependência de aprovação e procrastinação. Missão: encontrar o próprio centro sem se perder no outro — equilíbrio que inclui a própria voz.",
                fortes: ["Diplomacia e charme", "Senso de justiça", "Apreciação estética", "Sociabilidade", "Busca de harmonia"],
                fracos: ["Indecisão", "Evitar confrontos", "Dependência de aprovação", "Superficialidade ocasional", "Procrastinação"],
                mito: "<strong>Mito principal:</strong> As balanças de Temis (ou Astréia). Libra é o único signo representado por um objeto inanimado. Está associada a Temis, deusa da justiça divina, ou a Astréia, que carregava a balança da justiça. Na mitologia romana liga-se a Justitia. Antigamente as estrelas de Libra faziam parte das garras do Escorpião — símbolo da transição entre intensidade e equilíbrio.",
                compat: ["Gêmeos", "Aquário", "Leão", "Sagitário"],
                horoscopo: {
                    geral: "Vênus pede equilíbrio e harmonia. Busque o meio-termo nas decisões e cultive a beleza ao seu redor. Relacionamentos ganham destaque.",
                    amor: "Dia favorável para reconciliações e gestos românticos. Evite indecisão excessiva.",
                    trabalho: "Diplomacia e parceria são suas maiores ferramentas. Negociações fluem bem.",
                    dinheiro: "Equilíbrio entre gastar e poupar. Evite decisões financeiras só para agradar.",
                    saude: "Cuide dos rins e do equilíbrio emocional. Ambientes agradáveis fazem bem."
                }
            },
            {
                nome: "Escorpião",
                icone: "♏",
                datas: "23 de outubro – 21 de novembro",
                elemento: "Água 🜄",
                planeta: "Plutão ♇ / Marte ♂",
                modalidade: "Fixo",
                descricao: "Escorpião é o signo da intensidade, da transformação e da profundidade emocional. Pessoas escorpianas sentem tudo de forma visceral. São leais até o extremo, investigativas e com grande poder de regeneração. Quando equilibrado: paixão, lealdade profunda, intuição poderosa e capacidade de renascer. Quando desequilibrado: ciúmes, ressentimento, obsessão, manipulação e dificuldade em confiar. Missão: transformar o veneno em remédio — usar a intensidade para regenerar, não para destruir.",
                fortes: ["Intensidade e paixão", "Lealdade profunda", "Intuição poderosa", "Capacidade de transformação", "Determinação"],
                fracos: ["Ciúmes e possessividade", "Ressentimento", "Obsessão", "Manipulação", "Dificuldade em confiar"],
                mito: "<strong>Mito principal:</strong> O escorpião que matou Órion. O caçador Órion se gabava de que mataria todos os animais da Terra. Gaia (ou Ártemis/Apolo, conforme a versão) enviou um enorme escorpião para matá-lo. Depois da morte de Órion, tanto ele quanto o escorpião foram colocados no céu — em lados opostos, para que nunca se encontrassem novamente. Símbolo de poder, morte e renascimento.",
                compat: ["Câncer", "Peixes", "Virgem", "Capricórnio"],
                horoscopo: {
                    geral: "Plutão ativa transformações profundas. Olhe para o que precisa ser liberado ou regenerado. A intensidade de hoje pode se tornar força se bem canalizada.",
                    amor: "Paixão e profundidade marcam o dia. Evite ciúmes e conversas controladoras.",
                    trabalho: "Bom momento para investigar, pesquisar e resolver questões complexas. Sua determinação conta.",
                    dinheiro: "Cuidado com riscos ocultos. Prefira transparência e planejamento a longo prazo.",
                    saude: "Cuide do sistema reprodutivo e da energia vital. Transforme tensão em movimento."
                }
            },
            {
                nome: "Sagitário",
                icone: "♐",
                datas: "22 de novembro – 21 de dezembro",
                elemento: "Fogo 🜂",
                planeta: "Júpiter ♃",
                modalidade: "Mutável",
                descricao: "Sagitário é o signo da expansão, da aventura e da busca pela verdade. Pessoas sagitarianas são otimistas, filosóficas e amantes da liberdade. Precisam de movimento — físico, mental ou espiritual. Quando equilibrado: entusiasmo, honestidade, sede de conhecimento e generosidade. Quando desequilibrado: falta de tato, inquietação, promessas exageradas e fuga de compromissos. Missão: apontar a flecha para o horizonte sem abandonar quem caminha ao lado — liberdade com responsabilidade e verdade com gentileza.",
                fortes: ["Otimismo e entusiasmo", "Honestidade", "Sede de conhecimento", "Espírito aventureiro", "Generosidade"],
                fracos: ["Falta de tato", "Inquietação excessiva", "Promessas exageradas", "Impaciência com detalhes", "Dificuldade com compromisso"],
                mito: "<strong>Mito principal:</strong> Quíron, o centauro sábio. Diferente dos outros centauros selvagens, Quíron era culto, justo e compassivo — mestre de heróis como Aquiles, Jasão e Asclépio. Após ser ferido por uma flecha envenenada de Hércules (e sofrer eternamente por ser imortal), renunciou à imortalidade e foi colocado no céu. Representa a busca de conhecimento, a mentoria e a flecha apontada para o alto.",
                compat: ["Áries", "Leão", "Libra", "Aquário"],
                horoscopo: {
                    geral: "Júpiter amplia horizontes. É dia de aprender, explorar e manter o otimismo. Evite promessas que não possa cumprir e foque no que realmente importa.",
                    amor: "Espírito leve e aventureiro. Compartilhe ideias e experiências. Liberdade é essencial.",
                    trabalho: "Bom momento para estudos, viagens ou projetos que expandam conhecimento.",
                    dinheiro: "Oportunidades de crescimento, mas evite exageros e gastos impulsivos com viagens ou estudos.",
                    saude: "Cuide dos quadris e da circulação. Movimento e contato com a natureza revitalizam."
                }
            }
        ];

        // Arcanos Maiores (0 = O Louco, 1-21)
        const arcanos = {
            0:  { nome: "O Louco", simbolo: "🃏",
                  desc: "Inocência, novos começos, liberdade e salto no desconhecido. Representa a jornada da alma e a confiança no universo.",
                  inv: "Imprudência, risco desnecessário, falta de direção ou medo de começar. Cuidado com decisões impulsivas sem preparo." },
            1:  { nome: "O Mago", simbolo: "🪄",
                  desc: "Vontade, habilidade, manifestação e poder pessoal. Você tem as ferramentas necessárias para criar o que deseja.",
                  inv: "Manipulação, talentos desperdiçados, falta de foco ou ilusão de controle. Energia dispersa e potencial não realizado." },
            2:  { nome: "A Sacerdotisa", simbolo: "🔮",
                  desc: "Intuição, mistério, sabedoria interior e o inconsciente. Confie no que sente além da lógica.",
                  inv: "Segredos reprimidos, intuição bloqueada, superficialidade ou desconexão do mundo interior. Há algo que você não quer ver." },
            3:  { nome: "A Imperatriz", simbolo: "👑",
                  desc: "Fertilidade, abundância, natureza e criatividade. Energia de nutrição e realização material.",
                  inv: "Dependência, criatividade bloqueada, excesso de controle ou negligência consigo mesmo. Bloqueio na expressão e no cuidado." },
            4:  { nome: "O Imperador", simbolo: "🏛️",
                  desc: "Estrutura, autoridade, estabilidade e liderança. Ordem e responsabilidade constroem bases sólidas.",
                  inv: "Rigidez, abuso de poder, dominação ou falta de disciplina. Estrutura excessiva que sufoca a liberdade." },
            5:  { nome: "O Hierofante", simbolo: "📿",
                  desc: "Tradição, ensino, espiritualidade organizada e valores. Busca de conhecimento e orientação.",
                  inv: "Dogmatismo, rebeldia sem causa, restrição de crenças ou rejeição de ensinamentos úteis. Quebra de tradições de forma destrutiva." },
            6:  { nome: "Os Enamorados", simbolo: "💕",
                  desc: "Escolhas, união, valores e harmonia. Decisões do coração e alinhamento com o que é verdadeiro.",
                  inv: "Desarmonia, escolha errada, conflito de valores ou indecisão. Relacionamentos desalinhados ou tentação." },
            7:  { nome: "O Carro", simbolo: "🏇",
                  desc: "Determinação, vitória, controle e direção. Avance com confiança e superação de obstáculos.",
                  inv: "Falta de direção, agressividade, perda de controle ou obstáculos internos. Força mal canalizada." },
            8:  { nome: "A Força", simbolo: "🦁",
                  desc: "Coragem suave, domínio interior, paciência e compaixão. A verdadeira força é gentil e persistente.",
                  inv: "Insegurança, força bruta, dúvida de si ou agressividade reprimida. Falta de confiança no próprio poder interior." },
            9:  { nome: "O Eremita", simbolo: "🏮",
                  desc: "Introspecção, sabedoria, busca interior e solidão produtiva. A luz está dentro de você.",
                  inv: "Isolamento excessivo, solidão dolorosa, recusa de ajuda ou fuga do mundo. Sabedoria que não é compartilhada." },
            10: { nome: "A Roda da Fortuna", simbolo: "☸️",
                  desc: "Ciclos, destino, mudança e oportunidades. A vida gira — esteja aberto ao que chega.",
                  inv: "Resistência à mudança, má sorte temporária, ciclos negativos ou falta de adaptação. Momento de reavaliar o rumo." },
            11: { nome: "A Justiça", simbolo: "⚖️",
                  desc: "Equilíbrio, verdade, responsabilidade e causa e efeito. Aja com integridade e clareza.",
                  inv: "Injustiça, desequilíbrio, evasão de responsabilidade ou julgamento precipitado. Consequências de ações desequilibradas." },
            12: { nome: "O Pendurado", simbolo: "🙃",
                  desc: "Suspensão, nova perspectiva, sacrifício e entrega. Às vezes é preciso parar para ver diferente.",
                  inv: "Estagnação, martírio desnecessário, resistência a mudar de ponto de vista ou sacrifício inútil." },
            13: { nome: "A Morte", simbolo: "💀",
                  desc: "Transformação, fim de ciclos e renascimento. O que termina abre espaço para o novo.",
                  inv: "Resistência à mudança, medo do fim, estagnação ou transformação incompleta. Apegar-se ao que já morreu." },
            14: { nome: "A Temperança", simbolo: "🕊️",
                  desc: "Equilíbrio, moderação, cura e integração. Harmonize opostos e pratique a paciência.",
                  inv: "Desequilíbrio, excessos, impaciência ou falta de harmonia. Dificuldade em integrar partes de si." },
            15: { nome: "O Diabo", simbolo: "😈",
                  desc: "Apegos, ilusões, materialismo e libertação. Reconheça o que prende para se liberar.",
                  inv: "Libertação de apegos, quebra de correntes ou ilusões. Momento de tomar consciência e soltar o que limita." },
            16: { nome: "A Torre", simbolo: "🗼",
                  desc: "Ruptura súbita, revelação e libertação. Estruturas falsas caem para que a verdade surja.",
                  inv: "Evitar uma crise necessária, medo da mudança ou desastre adiado. A queda pode ser mais suave se aceita." },
            17: { nome: "A Estrela", simbolo: "⭐",
                  desc: "Esperança, inspiração, cura e fé. Após a tempestade, a luz guia o caminho.",
                  inv: "Desesperança, desconexão espiritual, falta de fé ou inspiração bloqueada. Momento de reencontrar a confiança." },
            18: { nome: "A Lua", simbolo: "🌙",
                  desc: "Ilusão, intuição, sonhos e o inconsciente. Nem tudo é o que parece — confie na intuição.",
                  inv: "Clareza emergindo, medos sendo enfrentados ou ilusões se desfazendo. A névoa começa a se dissipar." },
            19: { nome: "O Sol", simbolo: "☀️",
                  desc: "Vitalidade, sucesso, alegria e clareza. Energia positiva e realização iluminam o caminho.",
                  inv: "Otimismo excessivo, sucesso adiado, falta de clareza temporária ou energia baixa. A luz ainda está presente, só mais suave." },
            20: { nome: "O Julgamento", simbolo: "📯",
                  desc: "Despertar, avaliação, chamado e renascimento. É hora de ouvir o chamado superior.",
                  inv: "Autocrítica excessiva, dúvida sobre o caminho, chamado ignorado ou julgamento severo demais consigo." },
            21: { nome: "O Mundo", simbolo: "🌍",
                  desc: "Completude, realização, integração e conclusão de ciclo. Você chegou a um ponto de plenitude.",
                  inv: "Ciclo incompleto, sensação de falta, atraso na realização ou dificuldade em fechar um capítulo." }
        };

        // Correspondência signo → Arcano (tradição comum)
        const arcanoDoSigno = {
            "Áries": 4,        // O Imperador
            "Touro": 5,        // O Hierofante
            "Gêmeos": 6,       // Os Enamorados
            "Câncer": 7,       // O Carro
            "Leão": 8,         // A Força (ou 19 Sol)
            "Virgem": 9,       // O Eremita
            "Libra": 11,       // A Justiça
            "Escorpião": 13,   // A Morte
            "Sagitário": 14,   // A Temperança
            "Capricórnio": 15, // O Diabo
            "Aquário": 17,     // A Estrela
            "Peixes": 18       // A Lua
        };

        function reduzirNumero(n) {
            while (n > 21) {
                n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
            }
            return n;
        }

        // Reduz para 1-9, preservando mestres 11, 22, 33
        function reduzirPitagorico(n) {
            while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
                n = String(n).split('').reduce((a, b) => a + parseInt(b), 0);
            }
            return n;
        }

        const significadosNum = {
            1:  { nome: "Liderança",
                  desc: "O número da individualidade e do pioneirismo. Pessoas com vibração 1 tendem a ser independentes, corajosas e cheias de iniciativa. Gostam de liderar, criar e abrir caminhos novos. Possuem forte vontade e não gostam de seguir a multidão. Quando equilibrado: liderança inspiradora e originalidade. Quando desequilibrado: egocentrismo, impaciência, teimosia e dificuldade em aceitar ajuda. Missão: aprender a liderar sem dominar e a ser independente sem se isolar." },
            2:  { nome: "Cooperação",
                  desc: "O número da parceria, da sensibilidade e da diplomacia. A vibração 2 busca harmonia, cooperação e equilíbrio nas relações. São pessoas intuitivas, pacientes e boas mediadoras. Sentem profundamente o ambiente emocional. Quando equilibrado: empatia, união e apoio genuíno. Quando desequilibrado: indecisão, dependência emocional, medo de conflito e tendência a se anular. Missão: encontrar a própria voz dentro das parcerias e valorizar a sensibilidade como força." },
            3:  { nome: "Expressão",
                  desc: "O número da criatividade, da comunicação e da alegria de viver. A vibração 3 se expressa por palavras, arte, humor ou ideias. São sociáveis, otimistas e imaginativas. Precisam de estímulo e liberdade para criar. Quando equilibrado: inspiração, leveza e talento comunicativo. Quando desequilibrado: dispersão, superficialidade, fofoca ou dificuldade em concluir projetos. Missão: canalizar a criatividade de forma disciplinada e usar a voz para elevar, não apenas entreter." },
            4:  { nome: "Estrutura",
                  desc: "O número do trabalho, da ordem e da construção sólida. A vibração 4 valoriza disciplina, método e resultados concretos. São confiáveis, práticos e persistentes. Gostam de bases seguras e rotinas que funcionam. Quando equilibrado: estabilidade, lealdade e capacidade de realizar. Quando desequilibrado: rigidez, teimosia, excesso de controle e medo de mudança. Missão: construir com firmeza sem se tornar prisioneiro da própria estrutura." },
            5:  { nome: "Liberdade",
                  desc: "O número da mudança, da aventura e da versatilidade. A vibração 5 precisa de movimento, variedade e experiências novas. São curiosas, adaptáveis e sedentas de liberdade. Não gostam de rotina rígida nem de restrições. Quando equilibrado: dinamismo, coragem e abertura ao novo. Quando desequilibrado: inquietação, impulsividade, instabilidade e fuga de compromissos. Missão: viver a liberdade com responsabilidade e transformar a mudança em crescimento." },
            6:  { nome: "Harmonia",
                  desc: "O número do cuidado, da responsabilidade e do lar. A vibração 6 se realiza ao nutrir, proteger e criar harmonia — na família, nos relacionamentos ou na comunidade. São dedicadas, justas e sensíveis à beleza. Quando equilibrado: generosidade, equilíbrio e senso de dever saudável. Quando desequilibrado: controle excessivo, martírio, interferência na vida alheia e dificuldade em dizer não. Missão: cuidar dos outros sem abandonar a si mesmo." },
            7:  { nome: "Sabedoria",
                  desc: "O número da análise, da introspecção e da busca espiritual. A vibração 7 investiga, questiona e procura a verdade por trás das aparências. Precisam de solidão produtiva e de tempo para pensar. São observadoras, especializadas e muitas vezes místicas. Quando equilibrado: profundidade, discernimento e sabedoria prática. Quando desequilibrado: isolamento, frieza, ceticismo excessivo ou fuga da realidade. Missão: unir o conhecimento interior com a vida no mundo." },
            8:  { nome: "Poder",
                  desc: "O número da realização material, da autoridade e da ambição construtiva. A vibração 8 tem talento para organizar recursos, liderar negócios e alcançar status. Entende o mundo concreto e a lei de causa e efeito. Quando equilibrado: sucesso merecido, generosidade com o poder e visão de longo prazo. Quando desequilibrado: ganância, autoritarismo, trabalho excessivo e identificação total com o status. Missão: usar o poder e o dinheiro como instrumentos de realização e serviço, não como fim." },
            9:  { nome: "Humanitarismo",
                  desc: "O número da compaixão, do idealismo e da conclusão de ciclos. A vibração 9 vê o quadro maior e se move por causas coletivas. São generosas, artísticas e capazes de perdoar e recomeçar. Quando equilibrado: sabedoria emocional, serviço ao próximo e desapego saudável. Quando desequilibrado: vitimismo, idealismo irrealista, dificuldade em soltar o passado ou martírio. Missão: servir com o coração aberto e aprender a terminar ciclos com graça." },
            11: { nome: "Iluminação (Mestre)",
                  desc: "Número mestre da intuição elevada e da inspiração. A vibração 11 é um canal de insights, sensibilidade psíquica e visão espiritual. Traz o potencial de iluminar caminhos — os próprios e os dos outros. Exige maturidade emocional para não se sobrecarregar. Quando equilibrado: inspiração, idealismo prático e liderança espiritual. Quando desequilibrado: ansiedade nervosa, insegurança, idealismo disperso e dificuldade de aterrar as ideias. Missão: transformar a intuição em orientação útil e manter os pés no chão." },
            22: { nome: "Construtor Mestre",
                  desc: "Número mestre da realização em grande escala. A vibração 22 une a visão do sonhador com a capacidade do construtor. Pode materializar projetos que beneficiam muitas pessoas — empresas, instituições, obras sociais. Quando equilibrado: liderança prática, visão de longo prazo e realização coletiva. Quando desequilibrado: pressão interna extrema, medo de falhar, perfeccionismo paralisante ou queda para a vibração 4 (limitação). Missão: construir o que a intuição mostra, com método e humildade." },
            33: { nome: "Mestre Curador",
                  desc: "Número mestre do amor incondicional e do serviço elevado. A vibração 33 carrega a energia de ensinar, curar e elevar pelo exemplo. É a expressão mais alta do cuidado (6) elevada à dimensão espiritual. Quando equilibrado: compaixão ativa, ensino generoso e cura através da presença. Quando desequilibrado: auto-sacrifício excessivo, carregar o mundo nas costas ou cair na vibração 6 (controle familiar). Missão: servir com amor sem se perder de si, e lembrar que curar também é permitir." }
        };

        const tabelaPitagorica = {
            A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9,
            J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9,
            S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8
        };
        const vogais = new Set(['A','E','I','O','U']);

        function valorLetra(c) {
            const up = c.toUpperCase();
            // Remove acentos básicos
            const map = { 'Á':'A','À':'A','Â':'A','Ã':'A','Ä':'A','É':'E','Ê':'E','Í':'I','Ó':'O','Ô':'O','Õ':'O','Ú':'U','Ü':'U','Ç':'C' };
            const base = map[up] || up;
            return tabelaPitagorica[base] || 0;
        }

        function calcularCaminhoVida(dia, mes, ano) {
            // Método clássico: reduzir dia, mês e ano separadamente, depois somar
            const d = reduzirPitagorico(dia);
            const m = reduzirPitagorico(mes);
            const a = reduzirPitagorico(String(ano).split('').reduce((s, c) => s + parseInt(c), 0));
            return reduzirPitagorico(d + m + a);
        }

        function calcularAnoPessoal(dia, mes, anoRef) {
            const d = reduzirPitagorico(dia);
            const m = reduzirPitagorico(mes);
            const a = reduzirPitagorico(String(anoRef).split('').reduce((s, c) => s + parseInt(c), 0));
            return reduzirPitagorico(d + m + a);
        }

        function calcularNumerosNome(nome) {
            if (!nome || !nome.trim()) {
                return { destino: null, alma: null, personalidade: null };
            }
            let somaTodas = 0, somaVogais = 0, somaConsoantes = 0;
            for (const c of nome) {
                if (!/[a-zA-ZÀ-ú]/.test(c)) continue;
                const v = valorLetra(c);
                if (v === 0) continue;
                somaTodas += v;
                const up = c.toUpperCase();
                const map = { 'Á':'A','À':'A','Â':'A','Ã':'A','Ä':'A','É':'E','Ê':'E','Í':'I','Ó':'O','Ô':'O','Õ':'O','Ú':'U','Ü':'U' };
                const base = map[up] || up;
                if (vogais.has(base)) somaVogais += v;
                else somaConsoantes += v;
            }
            return {
                destino: reduzirPitagorico(somaTodas),
                alma: reduzirPitagorico(somaVogais),
                personalidade: reduzirPitagorico(somaConsoantes)
            };
        }

        function preencherNumero(idPrefix, num) {
            if (num === null || num === undefined) {
                document.getElementById(idPrefix).textContent = "—";
                document.getElementById(idPrefix + "-nome").textContent = "";
                document.getElementById(idPrefix + "-desc").textContent = "Informe o nome completo para calcular.";
                return;
            }
            const info = significadosNum[num] || { nome: "—", desc: "" };
            document.getElementById(idPrefix).textContent = num;
            document.getElementById(idPrefix + "-nome").textContent = info.nome;
            document.getElementById(idPrefix + "-desc").textContent = info.desc;
        }

        function calcularArcano(dia, mes, ano) {
            // Soma todos os dígitos da data
            let soma = 0;
            const str = String(dia).padStart(2, '0') + String(mes).padStart(2, '0') + String(ano);
            for (let c of str) soma += parseInt(c);
            return reduzirNumero(soma);
        }

        function calcularArcanoAno(dia, mes, anoRef) {
            let soma = 0;
            const str = String(dia).padStart(2, '0') + String(mes).padStart(2, '0') + String(anoRef);
            for (let c of str) soma += parseInt(c);
            return reduzirNumero(soma);
        }

        // Temas dos arcanos para combinar com o signo
        const temasArcano = {
            0:  { tema: "liberdade e novos começos", estilo: "espontâneo e aventureiro", desafio: "falta de direção" },
            1:  { tema: "manifestação e vontade", estilo: "habilidoso e proativo", desafio: "dispersão de energia" },
            2:  { tema: "intuição e mistério", estilo: "introspectivo e receptivo", desafio: "desconexão interior" },
            3:  { tema: "abundância e criação", estilo: "nutridor e criativo", desafio: "dependência ou bloqueio criativo" },
            4:  { tema: "estrutura e autoridade", estilo: "organizado e líder", desafio: "rigidez excessiva" },
            5:  { tema: "tradição e ensino", estilo: "orientador e tradicional", desafio: "dogmatismo" },
            6:  { tema: "escolhas e união", estilo: "harmonioso e relacional", desafio: "indecisão" },
            7:  { tema: "vitória e direção", estilo: "determinado e focado", desafio: "perda de controle" },
            8:  { tema: "coragem e domínio interior", estilo: "gentilmente forte", desafio: "insegurança" },
            9:  { tema: "sabedoria e introspecção", estilo: "reflexivo e sábio", desafio: "isolamento" },
            10: { tema: "ciclos e destino", estilo: "adaptável às mudanças", desafio: "resistência ao fluxo" },
            11: { tema: "equilíbrio e verdade", estilo: "justo e responsável", desafio: "julgamento severo" },
            12: { tema: "perspectiva e entrega", estilo: "paciente e observador", desafio: "estagnação" },
            13: { tema: "transformação e renascimento", estilo: "profundo e regenerador", desafio: "medo do fim" },
            14: { tema: "moderação e cura", estilo: "equilibrado e integrador", desafio: "excessos" },
            15: { tema: "apegos e libertação", estilo: "intenso e material", desafio: "correntes invisíveis" },
            16: { tema: "ruptura e revelação", estilo: "transformador súbito", desafio: "medo do colapso" },
            17: { tema: "esperança e inspiração", estilo: "otimista e curativo", desafio: "perda de fé" },
            18: { tema: "intuição e ilusão", estilo: "sonhador e sensível", desafio: "confusão emocional" },
            19: { tema: "vitalidade e clareza", estilo: "radiante e confiante", desafio: "otimismo excessivo" },
            20: { tema: "despertar e chamado", estilo: "avaliador e renovador", desafio: "autocrítica" },
            21: { tema: "completude e realização", estilo: "integrado e realizado", desafio: "ciclo incompleto" }
        };

        function gerarLeituraCombinada(signoNome, numPessoal, numAno, numSigno) {
            const tP = temasArcano[numPessoal];
            const tA = temasArcano[numAno];
            const tS = temasArcano[numSigno];
            const arcP = arcanos[numPessoal];
            const arcA = arcanos[numAno];
            const arcS = arcanos[numSigno];

            return `Como ${signoNome}, sua base é marcada por ${tS.tema} (Arcano do Signo: ${arcS.nome}). ` +
                `Seu Arcano Pessoal, ${arcP.nome}, adiciona um estilo ${tP.estilo}, com ênfase em ${tP.tema}. ` +
                `No ano de referência, a energia de ${arcA.nome} traz o tema de ${tA.tema}, pedindo que você cultive um jeito ${tA.estilo}. ` +
                `A combinação sugere: use a força natural de ${signoNome} para expressar ${tP.tema}, ` +
                `enquanto o ano convida a trabalhar ${tA.tema}. Atenção especial ao desafio de ${tP.desafio} (pessoal) e de ${tA.desafio} (ano).`;
        }

        function gerarTagsCombinadas(signoNome, numPessoal, numAno) {
            const tP = temasArcano[numPessoal];
            const tA = temasArcano[numAno];
            return [
                signoNome,
                arcanos[numPessoal].nome,
                arcanos[numAno].nome,
                tP.estilo,
                tA.tema
            ];
        }

        function personalizarHoroscopo(base, numAno, invertidaDia) {
            const tA = temasArcano[numAno];
            const extra = invertidaDia
                ? ` A Carta do Dia invertida pede cautela com ${tA.desafio}.`
                : ` A energia do ano (${tA.tema}) favorece atitudes ${tA.estilo}s.`;
            return base + extra;
        }

        function descobrirSigno() {
            const dia = parseInt(document.getElementById('dia').value);
            const mes = parseInt(document.getElementById('mes').value);
            const ano = parseInt(document.getElementById('ano').value);

            if (!dia || !mes || !ano) {
                alert('Por favor, selecione o dia, o mês e o ano do seu nascimento.');
                return;
            }

            const diasNoMes = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (dia > diasNoMes[mes]) {
                alert('Data inválida. Verifique o dia e o mês.');
                return;
            }

            let indice;
            if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) indice = 0;
            else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)) indice = 1;
            else if ((mes === 2 && dia >= 20) || (mes === 3 && dia <= 20)) indice = 2;
            else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) indice = 3;
            else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) indice = 4;
            else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) indice = 5;
            else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) indice = 6;
            else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) indice = 7;
            else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) indice = 8;
            else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) indice = 9;
            else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) indice = 10;
            else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) indice = 11;

            const s = signos[indice];

            document.getElementById('icone').textContent = s.icone;
            document.getElementById('nome').textContent = s.nome;
            document.getElementById('datas').textContent = s.datas;
            document.getElementById('elemento').textContent = s.elemento;
            document.getElementById('planeta').textContent = s.planeta;
            document.getElementById('modalidade').textContent = s.modalidade;
            document.getElementById('descricao').textContent = s.descricao;
            document.getElementById('mito').innerHTML = s.mito;

            document.getElementById('fortes').innerHTML = s.fortes.map(t => `<li>${t}</li>`).join('');
            document.getElementById('fracos').innerHTML = s.fracos.map(t => `<li>${t}</li>`).join('');
            document.getElementById('compat').innerHTML = s.compat.map(c => `<span>${c}</span>`).join('');

            // === TAROT ===
            function formatNum(n) {
                if (n === 0) return "0";
                return n < 10 ? "0" + n : String(n);
            }

            const numPessoal = calcularArcano(dia, mes, ano);
            const arcPessoal = arcanos[numPessoal];
            document.getElementById('arcano-pessoal-simbolo').textContent = arcPessoal.simbolo;
            document.getElementById('arcano-pessoal-num').textContent = formatNum(numPessoal);
            document.getElementById('arcano-pessoal-nome').textContent = arcPessoal.nome;
            document.getElementById('arcano-pessoal-desc').textContent = arcPessoal.desc;
            document.getElementById('arcano-pessoal-inv').textContent = arcPessoal.inv;

            // Ano de referência escolhido pelo usuário
            const anoRefVal = document.getElementById('ano-ref').value;
            const anoRef = anoRefVal ? parseInt(anoRefVal) : new Date().getFullYear();
            const numAno = calcularArcanoAno(dia, mes, anoRef);
            const arcAno = arcanos[numAno];
            document.getElementById('arcano-ano-simbolo').textContent = arcAno.simbolo;
            document.getElementById('arcano-ano-num').textContent = formatNum(numAno);
            document.getElementById('arcano-ano-nome').textContent = arcAno.nome + " (" + anoRef + ")";
            document.getElementById('arcano-ano-desc').textContent = arcAno.desc;
            document.getElementById('arcano-ano-inv').textContent = arcAno.inv;

            const numSigno = arcanoDoSigno[s.nome];
            const arcSigno = arcanos[numSigno];
            document.getElementById('arcano-signo-simbolo').textContent = arcSigno.simbolo;
            document.getElementById('arcano-signo-num').textContent = formatNum(numSigno);
            document.getElementById('arcano-signo-nome').textContent = arcSigno.nome;
            document.getElementById('arcano-signo-desc').textContent = arcSigno.desc;
            document.getElementById('arcano-signo-inv').textContent = arcSigno.inv;

            // Leitura combinada: Signo + Arcano Pessoal + Arcano do Ano
            document.getElementById('leitura-combinada').textContent =
                gerarLeituraCombinada(s.nome, numPessoal, numAno, numSigno);
            document.getElementById('combined-tags').innerHTML =
                gerarTagsCombinadas(s.nome, numPessoal, numAno).map(t => `<span>${t}</span>`).join('');

            // === NUMEROLOGIA PITAGÓRICA ===
            const caminho = calcularCaminhoVida(dia, mes, ano);
            preencherNumero('num-caminho', caminho);

            const anoPessoal = calcularAnoPessoal(dia, mes, anoRef);
            preencherNumero('num-ano-pessoal', anoPessoal);

            const nomeCompleto = document.getElementById('nome-completo').value;
            const numsNome = calcularNumerosNome(nomeCompleto);
            preencherNumero('num-destino', numsNome.destino);
            preencherNumero('num-alma', numsNome.alma);
            preencherNumero('num-personalidade', numsNome.personalidade);

            const aviso = document.getElementById('num-aviso-nome');
            if (!nomeCompleto.trim()) {
                aviso.textContent = "💡 Digite o nome completo acima para calcular Destino, Alma e Personalidade.";
            } else {
                aviso.textContent = "Calculado a partir de: " + nomeCompleto.trim();
            }

            // Carta do Dia (baseada na data de hoje — fixa no mesmo dia)
            const hoje = new Date();
            const seedDia = hoje.getFullYear() * 10000 + (hoje.getMonth() + 1) * 100 + hoje.getDate();
            const numDia = seedDia % 22;
            const invertida = (seedDia % 2 === 1);
            const arcDia = arcanos[numDia];
            document.getElementById('carta-dia-simbolo').textContent = arcDia.simbolo;
            document.getElementById('carta-dia-num').textContent = formatNum(numDia);
            document.getElementById('carta-dia-nome').textContent = arcDia.nome;
            document.getElementById('carta-dia-desc').textContent = arcDia.desc;
            document.getElementById('carta-dia-inv').textContent = arcDia.inv;

            const orientEl = document.getElementById('carta-dia-orientacao');
            if (invertida) {
                orientEl.textContent = "▼ Carta Invertida";
                orientEl.className = "tarot-orientation invertida";
            } else {
                orientEl.textContent = "▲ Carta Normal";
                orientEl.className = "tarot-orientation normal";
            }

            // Horóscopo personalizado pelo Arcano do Ano + Carta do Dia
            const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);
            document.getElementById('horoscope-date').textContent = '📅 ' + dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);
            document.getElementById('horoscope-geral').textContent = personalizarHoroscopo(s.horoscopo.geral, numAno, invertida);
            document.getElementById('horoscope-amor').textContent = s.horoscopo.amor;
            document.getElementById('horoscope-trabalho').textContent = s.horoscopo.trabalho;
            document.getElementById('horoscope-dinheiro').textContent = s.horoscopo.dinheiro;
            document.getElementById('horoscope-saude').textContent = s.horoscopo.saude;

            const resultado = document.getElementById('resultado');
            resultado.classList.remove('show');
            void resultado.offsetWidth;
            resultado.classList.add('show');

            setTimeout(() => {
                resultado.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') descobrirSigno();
        });
