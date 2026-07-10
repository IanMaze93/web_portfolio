const logo = String.raw`
.______      _______      ___        ______  __    __        ______    __    __  .___________.
|   _  \    |   ____|    /   \      /      ||  |  |  |      /  __  \  |  |  |  | |           |
|  |_)  |   |  |__      /  ^  \    |  ,----'|  |__|  |     |  |  |  | |  |  |  | '---|  |----'
|      /    |   __|    /  /_\  \   |  |     |   __   |     |  |  |  | |  |  |  |     |  |     
|  |\  \--. |  |____  /  _____  \  |  '----.|  |  |  |     |  '--'  | |  '--'  |     |  |     
| _| \.___| |_______|/__/     \__\  \______||__|  |__|      \______/   \______/      |__|     
                                                                                       
`;

export default function ContactLogo() {
  return (
    <pre className="font-mono text-[#b5cea8] text-[5px] sm:text-[7px] md:text-[9px] lg:text-xs text-center">
      {logo}
    </pre>
  );
}

const formLogo = String.raw`
  _______   ______   .______    .___  ___. 
 |   ____| /  __  \  |   _  \   |   \/   | 
 |  |__   |  |  |  | |  |_)  |  |  \  /  | 
 |   __|  |  |  |  | |      /   |  |\/|  | 
 |  |     |  '--'  | |  |\  \--.|  |  |  | 
|__|      \______/  | _| '.___||__|  |__|

`;

export function ContactFormLogo() {
  return (
    <pre className="scale-50 md:scale-75 text-[#b5cea8] lg:text-base font-mono text-center">
      {formLogo}
    </pre>
  );
}
