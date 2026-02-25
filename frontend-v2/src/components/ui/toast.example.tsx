// Example usage in a component
import { useToast } from '@/components/ui/toast';

export function ExampleComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast('Course enrolled successfully!', 'success');
  };

  const handleError = () => {
    showToast('Failed to process payment', 'error');
  };

  const handleInfo = () => {
    showToast('Your session will expire in 5 minutes', 'info', 10000);
  };

  const handleWarning = () => {
    showToast('Please complete your profile', 'warning');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleInfo}>Show Info</button>
      <button onClick={handleWarning}>Show Warning</button>
    </div>
  );
}
