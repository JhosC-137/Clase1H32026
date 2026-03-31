import requests
import random
from rest_framework.response import Response
from rest_framework.views import APIView

class Formula1PhotosView(APIView):
    def get(self, request):
        # Usaremos la API de Unsplash (requiere API key gratuita)
        api_key = "TU_API_KEY_DE_UNSPLASH"
        url = "https://api.unsplash.com/search/photos?query=formula1&per_page=30&client_id=" + api_key

        r = requests.get(url)
        data = r.json()

        # Seleccionar una foto aleatoria
        photos = data.get("results", [])
        if not photos:
            return Response({"error": "No se encontraron fotos"}, status=404)

        photo = random.choice(photos)
        return Response({
            "id": photo["id"],
            "description": photo.get("description"),
            "url": photo["urls"]["regular"],
            "author": photo["user"]["name"]
        })