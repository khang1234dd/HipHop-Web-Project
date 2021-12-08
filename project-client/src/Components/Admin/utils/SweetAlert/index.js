import Swal from "sweetalert2";
import './style.scss'
import {deletePostApi, changePostPassApi,changePostPublicApi,changePostHotApi,changePostBannedApi, deleteSongApi, changeSongPublicApi,changeVideoMusicPublicApi, deleteVideoMusicApi} from '../../../../Apis/admin.api'

export const SweetAlertDeletePost = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await deletePostApi(id);
            if(res.success)
            {
                Swal.fire(
                'Deleted!',
                'This post has been deleted.',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
            
          
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertPostPass = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changePostPassApi(id);
            if(res.success)
            {
                Swal.fire(
                'Approved!',
                'This post has been approved',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
            
          
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertPostPublic = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changePostPublicApi(id);
            if(res.success)
            {
                Swal.fire(
                'successful change',
                'this post has been changed',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
            
          
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertPostHot = async (id,status,text) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changePostHotApi(id);
            if(res.success)
            {
                Swal.fire(
                status +"!",
                text,
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
            
          
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertPostBanned = async (id,status,text) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changePostBannedApi(id);
            if(res.success)
            {
                Swal.fire(
                status+ '!',
                text,
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
            
          
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertDeleteSong = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await deleteSongApi(id);
            if(res.success)
            {
                Swal.fire(
                'Deleted!',
                'This song has been deleted.',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
        }
    })
    if(flag === true){
        return true;
    }
    
    
}

export const SweetAlertSongPublic = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changeSongPublicApi(id);
            if(res.success)
            {
                Swal.fire(
                'successful change',
                'this song has been changed',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
        }
    })
    if(flag === true){
        return true;
    }
}

export const SweetAlertVideoMusicPublic = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "Did you forget something?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await changeVideoMusicPublicApi(id);
            if(res.success)
            {
                Swal.fire(
                'successful change',
                'this video has been changed',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
        }
    })
    if(flag === true){
        return true;
    }
}

export const SweetAlertDeleteVideoMusic = async (id) => {
    var flag = false;
     await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await deleteVideoMusicApi(id);
            if(res.success)
            {
                Swal.fire(
                'Deleted!',
                'This video has been deleted.',
                'success'
                )
                flag=true;
            }else {
                Swal.fire(
                'Opps...!',
                'Something happened...',
                'error'
                )
                flag=false;
            }
        }
    })
    if(flag === true){
        return true;
    }
    
    
}