FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["SaladBarBackEnd/SaladBarBackEnd.csproj", "SaladBarBackEnd/"]
RUN dotnet restore "SaladBarBackEnd/SaladBarBackEnd.csproj"
COPY . .
WORKDIR "/src/SaladBarBackEnd"
RUN dotnet build "SaladBarBackEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SaladBarBackEnd.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SaladBarBackEnd.dll"]
