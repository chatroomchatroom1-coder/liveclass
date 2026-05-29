window.onload = async () => {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if(!user) return location.href = 'login.html';
    
    const { data: classes } = await supabaseClient.from('live_classes').select('*').eq('status', 'live');
    const list = document.getElementById('classesList');
    
    if(classes.length === 0) list.innerHTML = "Abhi koi live class nahi hai.";
    classes.forEach(cls => {
        list.innerHTML += `<div class="glass-panel" style="margin-bottom:10px;">
            <h3>${cls.title}</h3>
            <button class="btn btn-primary" onclick="joinClass('${cls.id}', '${user.id}')" style="margin-top:10px;">Join Class</button>
        </div>`;
    });
};

async function joinClass(classId, userId) {
    await supabaseClient.from('join_requests').upsert({ user_id: userId, class_id: classId, status: 'pending' });
    alert("Request send ho gayi hai, Admin ke approve karne ka wait karein.");
}
