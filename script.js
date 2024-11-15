// MODAL PAG INDEX

function areFieldsFilled() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    return name !== '' && age !== '';
}


    



function showNextModal(modalId) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');

    const nextModal = document.getElementById(modalId);
    if (nextModal) {
        if (modalId === 'modal3') {
            // Verifica se um avatar foi selecionado antes de mostrar o modal3
            document.getElementById('errorMessage').textContent = 'Por favor, selecione um avatar.';
            document.getElementById('errorMessage').style.display = 'block';
            // Mantém o modal2 aberto
            document.getElementById('modal3').style.display = 'flex';
            return;
        }
        nextModal.style.display = 'flex';
    }
}

// Exibe a primeira modal ao clicar no botão "INICIAR TESTE"
document.querySelector('.btnIniciar').addEventListener('click', function() {
    showNextModal('modal1');
});

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";

    // Redireciona para a página de jogo após o fechamento do modal
    if (modalId === 'modal4') {
        window.location.href = 'carregamento1.html';
    }
}

// TERMINO MODAL PAG INDEX 

//controla card com resultados 2° pag.
function showContent(contentId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    document.getElementById(contentId).style.display = 'block';

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));

    document.querySelector(`.nav-link[href="#${contentId}"]`).classList.add('active');
}

// AVATARES

// Variável para armazenar a seleção do avatar
