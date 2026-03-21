import { toast } from "react-toastify";

const getStoredAppsFromLocalStorage = () => {
  const storedAppsString = localStorage.getItem("apps");
  if (storedAppsString) {
    const storedApps = JSON.parse(storedAppsString);
    console.log(storedApps)
    return storedApps;
  }
  return [];
}

const saveAppsToLocalStorage = (apps) => {
  const appStringified = JSON.stringify(apps);
  localStorage.setItem("apps", appStringified)
  toast.success('Install Successfully')
  
}

const addAppsToLocalStorage = (id) => {
  const storedApps = getStoredAppsFromLocalStorage();
  if(storedApps.includes(id)){
    toast.error("Already Installed this app");
    return;
  }
  storedApps.push(id)
  saveAppsToLocalStorage(storedApps)
}


export { getStoredAppsFromLocalStorage as getStoredApps, addAppsToLocalStorage }