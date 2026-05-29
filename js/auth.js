document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Login ka code
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const { data, error } = await supabaseClient.auth.signInWithPassword({ 
                email: email, 
                password: password 
            });
            
            if (error) {
                alert("Login Error: " + error.message);
                return;
            }
            
            // Login successful hone par dashboard bhejein
            alert("Login Successful!");
            location.href = 'dashboard.html';
        });
    }

    // Register ka code
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // 1. Pehle Supabase me account banayein
            const { data: authData, error: authError } = await supabaseClient.auth.signUp({ 
                email: email, 
                password: password 
            });
            
            if (authError) {
                alert("Registration Error: " + authError.message);
                return;
            }
            
            // 2. Phir user ka naam database me daalein
            if (authData.user) {
                const { error: dbError } = await supabaseClient.from('users').insert([
                    { 
                        id: authData.user.id, 
                        email: email, 
                        full_name: fullname,
                        role: 'student' 
                    }
                ]);
                
                if (dbError) {
                    console.error("DB Error:", dbError);
                    alert("Account ban gaya, par naam save nahi hua. Aap fir bhi login kar sakte hain.");
                } else {
                    alert("Account ban gaya! Ab login karein.");
                }
                
                location.href = 'login.html';
            }
        });
    }
});
