window.onload = async () => {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if(!user) return location.href = 'login.html';
    loadRequests();
};

async function createClass() {
    const title = document.getElementById('classTitle').value;
    const { data: { user } } = await supabaseClient.auth.getUser();
    await supabaseClient.from('live_classes').insert([{ title, status: 'live', teacher_id: user.id }]);
    alert("Class Create ho gayi!");
}

async function loadRequests() {
    const { data } = await supabaseClient.from('join_requests').select('*, users(full_name)').eq('status', 'pending');
    const list = document.getElementById('requestsList');
    list.innerHTML = '';
    data.forEach(req => {
        list.innerHTML += `<div style="margin-top:10px;">${req.users.full_name} 
        <button onclick="updateReq('${req.id}', 'approved')" class="btn btn-primary">Approve</button></div>`;
    });
}

async function updateReq(id, status) {
    await supabaseClient.from('join_requests').update({ status }).eq('id', id);
    loadRequests();
}

function logout() { supabaseClient.auth.signOut().then(() => location.href = 'login.html'); }
