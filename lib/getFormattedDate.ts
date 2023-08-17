export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-UK', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}
