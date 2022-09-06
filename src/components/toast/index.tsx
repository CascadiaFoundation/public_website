import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const ToastMessage = ({ type, message }: { type: string; message: string }) => {
  switch (type) {
    case 'loading':
      toast[type](message);
      break;
    case 'success':
      toast[type](message);
      break;
    case 'info':
      toast[type](message);
      break;
    case 'error':
      toast[type](message);
      break;
    case 'warning':
      toast[type](message);
      break;
    case 'warn':
      toast[type](message);
      break;
    case 'dark':
      toast[type](message);
      break;
    default:
      break;
  }
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
