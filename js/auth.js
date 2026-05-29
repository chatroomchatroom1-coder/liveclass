document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
            if (error) return alert(error.message);
            
            const { data: profile } = await supabaseClient.from('users').select('role').eq('id', data.user.id).single();
            if (profile.role === 'admin') location.href = 'admin.html';
            else location.href = 'dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const fullname = document.getElementById('fullname').value;
            
            const { data, error } = await supabaseClient.auth.signUp({ email, password });
            if (error) return alert(error.message);
            
            await supabaseClient.from('users').insert([{ id: data.user.id, email, full_name: fullname }]);
            alert("Account ban gaya! Ab login karein.");
            location.href = 'login.html';
        });
    }
});
