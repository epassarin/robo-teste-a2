/**
 * ====================================================
 * Script de automação / teste em Node.js
 * ====================================================
 * Linguagem: JavaScript
 * Ambiente: Node.js
 * Objetivo: Simular um processo automatizado
 * ====================================================
 */

// Importa módulos nativos do Node.js
const os = require('os');
const fs = require('fs');

// Função principal da automação
function executarAutomacao() {
  console.log('🚀 Iniciando automação...\n');

  // Informações do ambiente
  console.log('📌 Informações do sistema:');
  console.log(`Sistema operacional: ${os.platform()}`);
  console.log(`Arquitetura: ${os.arch()}`);
  console.log(`Versão do Node.js: ${process.version}\n`);

  // Simulação de validação
  console.log('✅ Verificando ambiente...');
  validarAmbiente();

  // Simulação de tarefa automatizada
  console.log('\n⚙️ Executando tarefa automatizada...');
  executarTarefa();

  console.log('\n🎉 Automação finalizada com sucesso!');
}

// Função que simula uma validação
function validarAmbiente() {
  if (!process.version.startsWith('v20')) {
    console.warn('⚠️ Atenção: versão do Node diferente da esperada');
  } else {
    console.log('✔️ Versão do Node compatível');
  }
}

// Função que simula uma tarefa real
function executarTarefa() {
  const mensagem = 'Automação funcionando com sucesso ✅';

  // Escreve um arquivo como exemplo de automação
  fs.writeFileSync('resultado.txt', mensagem);

  console.log('✔️ Tarefa executada');
  console.log(`📄 Arquivo "resultado.txt" gerado`);
}

// Executa a automação
try {
  executarAutomacao();
  process.exit(0); // sucesso
} catch (error) {
  console.error('❌ Erro durante a automação:', error.message);
  process.exit(1); // erro (importante para CI/CD)
}
